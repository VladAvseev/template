import { types } from "mobx-state-tree";
import { Status } from "./status";
import { Task } from "./task";
import { Responsible } from "./responsible_user";

export const dashboard = types.model('dashboard')
.volatile(() => ({
	columns: [
		Status.create({
			status_name: 'Задачи',
			tasks: [
				Task.create({
					id: 0,
					title: 'Задача 1',
					deadline: new Date(),
					delay_deadline: new Date(),
					responsible: Responsible.create({
						user_id: 12,
						username: "Yuriy"
					})
				})
			]
	})],

}))
.views(() => ({

}))
.actions(() => ({
	// здесь другие методы страницы
}))
.actions(() => ({
	start() {
		// здесь логика того что будет происходить при открытии страницы
	},
}))
.create({});