import { types } from "mobx-state-tree";
import VMDatePicker from "../../../../mvvm/DatePicker/VMDatePicker";
import VMButton from "../../../../mvvm/Button/VMButton";
import { api } from "../../../../api";
import { dependency } from ".";

export const form = types.model('form').volatile(() => ({
	id: 0,
	deadline: VMDatePicker.create({}),
	send: VMButton.create({text: 'Изменить'}),
}))
.views((self) => ({
	get data() {
		const date = new Date(self.deadline.value);
		console.log(`${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`);
		return {
			task_id: self.id,
			new_deadline: `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`,
		}
	}
}))
.actions((self) => ({
	setId(value: number) {
		self.id = value;
	},
	afterCreate() {
		self.send.setOnClick(async () => {
			try {
				await api.editDeadline(self.data);
			} catch(e) {
				console.log(e)
			} finally {
				dependency.timeline.fetch();
			}
		})
	}
}))
.create({});