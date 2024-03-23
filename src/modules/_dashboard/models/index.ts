import { types } from "mobx-state-tree";
import { Status } from "./status";
import { api } from "../../../api";

export const dashboard = types.model('dashboard')
.volatile(() => ({
	columns: [
		Status.create({
			status_name: 'Не начато',
			tasks: []
	}),
		Status.create({
			status_name: 'Задачи',
			tasks: []
		})
	],
	currentProgress: 13.37
}))
.views(() => ({
	
}))
.actions((self) => ({
	setColumns: (data) => {
		const colums = data.map((item) => Status.create({
			status_name: item.status_name,
			tasks: item.tasks
		}))
		self.columns = colums;
	}
}))
.actions((self) => ({
	// здесь другие методы страницы
	getTasks: async () => {
		const res = await api.getDashboardTasks();
		const {data: {
			progress,
			statuses,
		}} = res
		console.log(statuses)
		self.setColumns(statuses)
		self.currentProgress = progress
	}
}))
.actions((self) => ({
	start() {
		self.getTasks()
	},
}))
.create({});