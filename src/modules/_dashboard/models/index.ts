import { types } from "mobx-state-tree";
import { Status } from "./status";
import { api } from "../../../api";
import { Task } from "./task";
import { Responsible } from "./responsible_user";

export const dashboard = types.model('dashboard')
.volatile(() => ({
	columns: [
		Status.create({
			status_name: 'to_do',
			tasks: [
				Task.create({
					id: 1,
					title: 'Задача 1',
					deadline: '2020-01-01',
					responsible: Responsible.create({
						user_id: 123,
						username: 'Yuriy'
					})
				})
			]
		}),
		Status.create({
			status_name: 'in_progress',
			tasks: [
				Task.create({
					id: 1,
					title: 'Задача 1',
					deadline: '2020-01-01',
					responsible: Responsible.create({
						user_id: 123,
						username: 'Yuriy'
					})
				})
			]
		}),
		Status.create({
			status_name: 'done',
			tasks: [
				Task.create({
					id: 1,
					title: 'Задача 1',
					deadline: '2020-01-01',
					responsible: Responsible.create({
						user_id: 123,
						username: 'Yuriy'
					})
				})
			]
		}),
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