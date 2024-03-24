import { types } from "mobx-state-tree";
import { Timeline } from "./Timeline";
import { datePlusOneDay, datesDiference } from "../../../../utils/date";

export const main = types.model('editTask')
.volatile(() => ({
	// здесь будут модели компонентов страницы
	timeline: Timeline.create({}),
}))
.views((self) => ({
	get startDate(): Date {
		return self.timeline.tasks[0]?.start_date || new Date();
	},
	get finishDate(): Date {
		return datePlusOneDay(self.timeline.tasks[self.timeline.tasks.length - 1]?.deadline || new Date());
	},
	get daysCount(): number {
		if (this.startDate && this.finishDate) {
			return datesDiference(this.finishDate, this.startDate);
		} else {
			throw new Error('ошибка в daysCount');
		}
	},
	get daysRow(): Date[] {
		const row = [];
		let date = this.startDate;
		for (let i = 0; i <= this.daysCount; i++) {
			row.push(date);
			date = new Date(datePlusOneDay(date));
		}
		return row;
	}
}))
.actions(() => ({
	// здесь другие методы страницы
}))
.actions((self) => ({
	start() {
		// здесь логика того что будет происходить при открытии страницы
		self.timeline.start();
	},
}))
.create({});