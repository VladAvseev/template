import { types } from "mobx-state-tree";
import { TTaskInstance, Task } from "./Task";
import { api } from "../../../../api";
import { TTimelineTask } from "../../../../types/TTimelineTask";
import { User } from "./User";
import { Warning } from "./Warning";

export const Timeline = types.model('Timeline').volatile(() => ({
	tasks: [] as TTaskInstance[],
}))
.actions((self) => ({
	setTasks(tasks: TTimelineTask[]) {
		// self.tasks = tasks.map((task) => {
		// 	return Task.create({
		// 		...task, 
		// 		start_date: new Date(task.start_date),
		// 		finish_date: new Date(task.finish_date),
		// 		deadline: new Date(task.deadline),
		// 		responsible: User.create({
		// 			id: task.responsible.id,
		// 			name: task.responsible.name
		// 		}),
		// 		warnings: task.warnings.map((warning) => Warning.create({...warning}))
		// 	})
		// })

		self.tasks = [
			Task.create({
				id: 1,
				title: 'задача 1',
				status: 'done',
				start_date: new Date('2024-03-15'),
				finish_date: new Date('2024-03-23'),
				deadline: new Date('2024-03-21'), 
				responsible: User.create({
					id: 1,
					name: 'Влад',
				}),
				warnings: [
					Warning.create({
						type: 'late_deadline',
						task_id: 1
					}),
					Warning.create({
						type: 'finish_hard',
						task_id: 1
					})
				]
			}),
			Task.create({
				id: 2,
				title: 'задача 2',
				status: 'done',
				start_date: new Date('2024-03-16'),
				finish_date: new Date('2024-03-22'),
				deadline: new Date('2024-03-24'), 
				responsible: User.create({
					id: 2,
					name: 'Валя',
				}),
				warnings: []
			}),
			Task.create({
				id: 3,
				title: 'задача 3',
				status: 'in_progress',
				start_date: new Date('2024-03-17'),
				finish_date: new Date('2024-03-25'),
				deadline: new Date('2024-03-24'), 
				responsible: User.create({
					id: 3,
					name: 'Артем',
				}),
				warnings: [
					Warning.create({
						type: 'finish_hard',
						task_id: 3
					})
				]
			}),
			Task.create({
				id: 4,
				title: 'задача 4',
				status: 'in_progress',
				start_date: new Date('2024-03-18'),
				finish_date: new Date('2024-03-24'),
				deadline: new Date('2024-03-24'), 
				responsible: User.create({
					id: 4,
					name: 'Артем',
				}),
				warnings: [
					Warning.create({
						type: 'finish_hard',
						task_id: 4
					})
				]
			}),
			Task.create({
				id: 5,
				title: 'задача 5',
				status: 'to_do',
				start_date: new Date('2024-03-20'),
				finish_date: new Date('2024-03-26'),
				deadline: new Date('2024-03-31'), 
				responsible: User.create({
					id: 5,
					name: 'Вика',
				}),
				warnings: [
					Warning.create({
						type: 'start_hard',
						task_id: 5
					})
				]
			}),
		]
	}
}))
.actions((self) => ({
	async fetch() {
		// const res = await api.getTimelineTasks();
		// const {
		// 	data: {
		// 		tasks,
		// 	} 
		// } = res;
		// self.setTasks(tasks);
		self.setTasks([]);
	}
}))
.actions((self) => ({
	start() {
		self.fetch();
	}
}))