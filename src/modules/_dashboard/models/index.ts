import { types } from "mobx-state-tree";
import { Status } from "./status";
import { Task } from "./task";
import { Responsible } from "./responsible_user";
import axios from "axios";
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
	]

}))
.views(() => ({

}))
.actions(() => ({
	// здесь другие методы страницы
	getAllTasks: () => {
		const url = 'some_url'
		axios.get(url).then(response => {
			const tasks = response.data
			console.log(tasks)
		})
	}
}))
.actions(() => ({
	start() {
		api.getDashboardTasks().then(response => {
			console.log(response.data)
		})
		// здесь логика того что будет происходить при открытии страницы
	},
}))
.create({});