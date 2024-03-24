import { types } from "mobx-state-tree";
import { TTaskInstance, Task } from "./Task";
import { api } from "../../../../api";
import { TTimelineTask } from "../../../../types/TTimelineTask";
import { User } from "./User";
import { Warning } from "./Warning";
import { dependency } from ".";

export const Timeline = types.model('Timeline').volatile(() => ({
	tasks: [] as TTaskInstance[],
	isPending: false,
}))
.actions((self) => ({
	setIsPenging(value: boolean) {
		self.isPending = value;
	},
	setTasks(tasks: TTimelineTask[]) {
		self.tasks = tasks.map((task) => {
			return Task.create({
				...task, 
				start_date: new Date(task.start_date),
				finish_date: new Date(task.finish_date),
				deadline: new Date(task.deadline),
				responsible: User.create({
					id: task.responsible.id,
					name: task.responsible.name
				}),
				warnings: task.warnings.map((warning) => Warning.create({...warning}))
			})
		})

		// self.tasks = [
		// 	Task.create({
		// 		id: 1,
		// 		title: 'задача 1',
		// 		status: 'done',
		// 		start_date: new Date('2024-03-15'),
		// 		finish_date: new Date('2024-03-23'),
		// 		deadline: new Date('2024-03-21'), 
		// 		responsible: User.create({
		// 			id: 1,
		// 			name: 'Влад',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'late_deadline',
		// 				task_id: 1
		// 			}),
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 1
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 2,
		// 		title: 'задача 2',
		// 		status: 'done',
		// 		start_date: new Date('2024-03-16'),
		// 		finish_date: new Date('2024-03-22'),
		// 		deadline: new Date('2024-03-24'), 
		// 		responsible: User.create({
		// 			id: 2,
		// 			name: 'Валя',
		// 		}),
		// 		warnings: []
		// 	}),
		// 	Task.create({
		// 		id: 3,
		// 		title: 'задача 3',
		// 		status: 'in_progress',
		// 		start_date: new Date('2024-03-17'),
		// 		finish_date: new Date('2024-03-25'),
		// 		deadline: new Date('2024-03-24'), 
		// 		responsible: User.create({
		// 			id: 3,
		// 			name: 'Артем',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 3
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 4,
		// 		title: 'задача 4',
		// 		status: 'in_progress',
		// 		start_date: new Date('2024-03-18'),
		// 		finish_date: new Date('2024-03-24'),
		// 		deadline: new Date('2024-03-24'), 
		// 		responsible: User.create({
		// 			id: 4,
		// 			name: 'Артем',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 4
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 5,
		// 		title: 'задача 5',
		// 		status: 'to_do',
		// 		start_date: new Date('2024-03-20'),
		// 		finish_date: new Date('2024-03-26'),
		// 		deadline: new Date('2024-03-31'), 
		// 		responsible: User.create({
		// 			id: 5,
		// 			name: 'Вика',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'start_hard',
		// 				task_id: 5
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 6,
		// 		title: 'задача 6',
		// 		status: 'done',
		// 		start_date: new Date('2024-03-18'),
		// 		finish_date: new Date('2024-03-26'),
		// 		deadline: new Date('2024-03-24'), 
		// 		responsible: User.create({
		// 			id: 1,
		// 			name: 'Влад',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'late_deadline',
		// 				task_id: 6
		// 			}),
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 6
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 7,
		// 		title: 'задача 7',
		// 		status: 'done',
		// 		start_date: new Date('2024-03-19'),
		// 		finish_date: new Date('2024-03-27'),
		// 		deadline: new Date('2024-03-29'), 
		// 		responsible: User.create({
		// 			id: 2,
		// 			name: 'Валя',
		// 		}),
		// 		warnings: []
		// 	}),
		// 	Task.create({
		// 		id: 8,
		// 		title: 'задача 8',
		// 		status: 'in_progress',
		// 		start_date: new Date('2024-03-20'),
		// 		finish_date: new Date('2024-03-28'),
		// 		deadline: new Date('2024-03-29'), 
		// 		responsible: User.create({
		// 			id: 3,
		// 			name: 'Артем',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 8
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 9,
		// 		title: 'задача 9',
		// 		status: 'in_progress',
		// 		start_date: new Date('2024-03-28'),
		// 		finish_date: new Date('2024-03-30'),
		// 		deadline: new Date('2024-03-30'), 
		// 		responsible: User.create({
		// 			id: 4,
		// 			name: 'Артем',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 9
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 10,
		// 		title: 'задача 10',
		// 		status: 'to_do',
		// 		start_date: new Date('2024-04-01'),
		// 		finish_date: new Date('2024-03-13'),
		// 		deadline: new Date('2024-03-14'), 
		// 		responsible: User.create({
		// 			id: 5,
		// 			name: 'Вика',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'start_hard',
		// 				task_id: 10
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 19,
		// 		title: 'задача 19',
		// 		status: 'done',
		// 		start_date: new Date('2024-04-15'),
		// 		finish_date: new Date('2024-04-23'),
		// 		deadline: new Date('2024-04-21'), 
		// 		responsible: User.create({
		// 			id: 1,
		// 			name: 'Влад',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'late_deadline',
		// 				task_id: 19
		// 			}),
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 19
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 20,
		// 		title: 'задача 20',
		// 		status: 'done',
		// 		start_date: new Date('2024-03-16'),
		// 		finish_date: new Date('2024-04-22'),
		// 		deadline: new Date('2024-04-24'), 
		// 		responsible: User.create({
		// 			id: 20,
		// 			name: 'Валя',
		// 		}),
		// 		warnings: []
		// 	}),
		// 	Task.create({
		// 		id: 30,
		// 		title: 'задача 30',
		// 		status: 'in_progress',
		// 		start_date: new Date('2024-04-17'),
		// 		finish_date: new Date('2024-04-25'),
		// 		deadline: new Date('2024-04-22'), 
		// 		responsible: User.create({
		// 			id: 3,
		// 			name: 'Артем',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 30
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 40,
		// 		title: 'задача 40',
		// 		status: 'in_progress',
		// 		start_date: new Date('2024-04-18'),
		// 		finish_date: new Date('2024-04-24'),
		// 		deadline: new Date('2024-04-24'), 
		// 		responsible: User.create({
		// 			id: 40,
		// 			name: 'Артем',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 40
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 50,
		// 		title: 'задача 50',
		// 		status: 'to_do',
		// 		start_date: new Date('2024-04-20'),
		// 		finish_date: new Date('2024-04-26'),
		// 		deadline: new Date('2024-04-31'), 
		// 		responsible: User.create({
		// 			id: 5,
		// 			name: 'Вика',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'start_hard',
		// 				task_id: 50
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 60,
		// 		title: 'задача 60',
		// 		status: 'done',
		// 		start_date: new Date('2024-05-01'),
		// 		finish_date: new Date('2024-05-03'),
		// 		deadline: new Date('2024-05-01'), 
		// 		responsible: User.create({
		// 			id: 1,
		// 			name: 'Влад',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'late_deadline',
		// 				task_id: 60
		// 			}),
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 60
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 70,
		// 		title: 'задача 70',
		// 		status: 'done',
		// 		start_date: new Date('2024-05-01'),
		// 		finish_date: new Date('2024-05-22'),
		// 		deadline: new Date('2024-05-24'), 
		// 		responsible: User.create({
		// 			id: 2,
		// 			name: 'Валя',
		// 		}),
		// 		warnings: []
		// 	}),
		// 	Task.create({
		// 		id: 80,
		// 		title: 'задача 80',
		// 		status: 'in_progress',
		// 		start_date: new Date('2024-05-17'),
		// 		finish_date: new Date('2024-05-25'),
		// 		deadline: new Date('2024-05-24'), 
		// 		responsible: User.create({
		// 			id: 3,
		// 			name: 'Артем',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 80
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 90,
		// 		title: 'задача 90',
		// 		status: 'in_progress',
		// 		start_date: new Date('2024-05-18'),
		// 		finish_date: new Date('2024-05-24'),
		// 		deadline: new Date('2024-05-24'), 
		// 		responsible: User.create({
		// 			id: 4,
		// 			name: 'Артем',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'finish_hard',
		// 				task_id: 90
		// 			})
		// 		]
		// 	}),
		// 	Task.create({
		// 		id: 100,
		// 		title: 'задача 100',
		// 		status: 'to_do',
		// 		start_date: new Date('2024-05-20'),
		// 		finish_date: new Date('2024-05-26'),
		// 		deadline: new Date('2024-05-31'), 
		// 		responsible: User.create({
		// 			id: 5,
		// 			name: 'Вика',
		// 		}),
		// 		warnings: [
		// 			Warning.create({
		// 				type: 'start_hard',
		// 				task_id: 100
		// 			})
		// 		]
		// 	}),
		// ]
	}
}))
.actions((self) => ({
	async fetch() {
		self.setIsPenging(true);
		const res = await api.getTimelineDependencies({task_id: dependency.id});
		const {
			data: {
				tasks,
			} 
		} = res;
		self.setTasks(tasks);
		self.setIsPenging(false);
	}
}))
.actions((self) => ({
	start() {
		self.fetch();
	}
}))