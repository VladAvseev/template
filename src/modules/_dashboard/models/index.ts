import { types } from "mobx-state-tree";
import { Status, TStatusInstance } from "./status";
import { api } from "../../../api";
import { json } from "react-router-dom";
import { string } from "mobx-state-tree/dist/internal";
import { TTaskInstance, Task } from "./task";
import { Responsible } from "./responsible_user";
import { TWarningInstance, Warning } from "./warning";

export const dashboard = types.model('dashboard')
.volatile(() => ({
	columns: [],
	currentProgress: 0
}))
.views(() => ({
	
}))
.actions((self) => ({
	setColumns: (data) => {
		console.log(data[0].responsible)
		const colums = data.map((item: unknown) => Status.create({
			status_name: item.status_name,
			order_number: item.order_number,
			tasks: item.tasks.map((task: TTaskInstance) => Task.create({
				id: task.id,
				title: task.title,
				deadline: task.deadline,
				responsible: Responsible.create({
					user_id: task.responsible.id,
					username: task.responsible.name,
				}),
				warnings: task.warnings.map((warning: TWarningInstance) => Warning.create({
					type: warning.type,
					task_id: warning.task_id
				}))
			})),
		})).sort((a, b) => a.order_number - b.order_number)
		self.columns = colums
	},
	setCurrentProgress: (progress: number) => {
		self.currentProgress = progress;
	}
}))
.actions((self) => ({
	getTasks: async () => {
		const res = await api.getDashboardTasks();
		const {data: {
			progress,
			statuses,
		}} = res
		self.setCurrentProgress(progress)
		self.setColumns(statuses)
	}
}))
.actions((self) => ({
	start() {
		self.getTasks()
	},
}))
.create({});