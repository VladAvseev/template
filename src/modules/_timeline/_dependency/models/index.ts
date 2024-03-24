import { types } from "mobx-state-tree";
import { Timeline } from "./Timeline";
import { datePlusOneDay, datesDiference } from "../../../../utils/date";

export const dependency = types.model('editTask')
.volatile(() => ({
	// здесь будут модели компонентов страницы
	id: 0,
	timeline: Timeline.create({}),
}))
.views((self) => ({
	get startDate(): Date {
		let date = new Date();
		self.timeline.tasks.forEach((task) => {
			if (datesDiference(date, task.start_date) > 0) {
				date = task.start_date;
			}
		})
		return date;
	},
	get finishDate(): Date {
		let date = new Date();
		self.timeline.tasks.forEach((task) => {
			if (datesDiference(task.deadline, date) > 0) {
				date = task.deadline;
			}
			if (datesDiference(task.finish_date, date) > 0) {
				date = task.finish_date;
			}
		})
		return datePlusOneDay(date);
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
.actions((self) => ({
	// здесь другие методы страницы
	setId(value: number) {
		self.id = value;
	}
}))
.actions((self) => ({
	start(id: number) {
		// здесь логика того что будет происходить при открытии страницы
		self.setId(id);
		self.timeline.start();
	},
}))
.create({});