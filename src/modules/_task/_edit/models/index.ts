import { types } from "mobx-state-tree";
import VMTextField from "../../../../mvvm/TextField/VMTextField";
import VMButton from "../../../../mvvm/Button/VMButton";
import VMSelect from "../../../../mvvm/Select/VMSelect";
import MSelectOption from "../../../../mvvm/Select/MSelectOption";
import VMDatePicker from "../../../../mvvm/DatePicker/VMDatePicker";
import VMNumberTextField from "../../../../mvvm/TextField/VMNumberTextField";
import { DependTask} from "./dependsTask";
import { apiDefineProperty } from "mobx/dist/internal";
import { api } from "../../../../api";
import { TDependTasks } from "../../../../types/TDependTasks";
import { TDependencyType } from "../../../../types/TDependencyType";
import { TGetTaskDescriptionParams } from "../../../../api";
import { TEditTaskParams } from "../../../../api";
import { TArchieveTaskParams } from "../../../../api";

export const editTask = types.model('createTask')
.volatile(() => ({
	// здесь будут модели компонентов страницы
	isID: 0,
	isPending: false,
	isForm: false,
	titleText: VMTextField.create({
		label: "Название задачи"
	}),
	descriptionText : VMTextField.create({
		label: "Описание задачи",
		isMultiline: true
	}),
	daysField: VMNumberTextField.create({
		label: "Трудоемкость ч/дн"
	}),
	toDoBtn: VMButton.create({
		text: "Запланирована"
	}),
	inProgressBtn: VMButton.create({
		text: "В процессе"
	}),
	doneBtn: VMButton.create({
		text: "Выполнена"
	}),
	status: "",
	taskResponsibleSelect: VMSelect.create({
		label: "Ответственный за задачу",
		options: []
	}),
	dateSelect: VMDatePicker.create({}),
	createBtn: VMButton.create({
		text: "Сохранить изменения"
	}),
	taskSelect: VMSelect.create({
		label: "Выбор задачи",
		options: []
	}),
	connectionSelect: VMSelect.create({
		label: "Выбор связи",
		options: [
			MSelectOption.create ({
				label: "Следующая",
				value: "dependent_for",
				isSelected: false,
				isDisabled: false,
			}),
			MSelectOption.create ({
				label: "Предыдущая",
				value: "depends_of",
				isSelected: false,
				isDisabled: false,
			})
			]
	}),
	setConnectionBtn: VMButton.create({
		text: "Сохранить связь"
	}),
	deleteBtn: VMButton.create({
		text: "Удалить задачу"
	}),
	addBtn: VMButton.create({
		text: "Создать новую связь"
	}),
	listDepends: [] as (TDependTasks & {type: string, title: string})[],
	deliteDependBtn: VMButton.create({
		text: "Удалить связь"
	})
}))
.views((self) => ({
	
}))
.actions((self) => ({
	setIsForm(value: boolean) {
		self.isForm = value
	},
	setIsPending(value: boolean) {
		self.isPending = value
	},
	setStatus(value: string) {
		self.status = value
	},
	setIsId(value: number) {
		self.isID = value
	},
	async fetchUserSelect(){
		const res = await api.getUsers();
		console.log(res);	
		const { data: {users} } = res;
		self.taskResponsibleSelect.setOptions(users)
	},
	async fetchTaskList(){
		const res = await api.getAllTasks();
		console.log(res);
		const { data: {tasks} } = res;
		self.taskSelect.setListTasks(tasks)
	},
	async setListDepends(value: (TDependTasks & {type: string, title: string})[]){
		self.listDepends = value
	},
	async getTask(value: TGetTaskDescriptionParams){
		const res = await api.getTaskDescription(value);
		const { data: task } = res;
		self.titleText.value = task.title;
		self.descriptionText.value = task.description;
		self.daysField.value = task.days_for_completion.toString();
		self.taskResponsibleSelect.onChange({target: { value: task.responsible.id }})
	},
	async editTask(value: TEditTaskParams) {
		await api.editTask(value)
	},
	async deleteTask(value: TArchieveTaskParams) {
		await api.archieveTask(value)
	}
}))
.actions((self) => ({
	afterCreate(){
		self.addBtn.setOnClick(() => {self.setIsForm(true); console.log(self.isForm)}),
		self.setConnectionBtn.setOnClick(() => {
			self.setIsForm(false);
			self.setListDepends([...self.listDepends, {
				task_id: Number(self.taskSelect.selected.value),
				depend: (self.connectionSelect.selected.value) as TDependencyType,
				type: self.connectionSelect.selected.label,
				title: self.taskSelect.selected.label,
			}
				]);
		}),
		self.toDoBtn.setOnClick(async () => {
			try {
				self.toDoBtn.setIsDisabled(true);
			await api.updateTaskStatus({task_id: self.isID, new_status: 'to_do'});
			self.setStatus("to_do");
			self.toDoBtn.setIsDisabled(false);
			} catch(e) {
				console.log(e);
			}
		}),
		self.inProgressBtn.setOnClick(async () => {
			try {
				self.inProgressBtn.setIsDisabled(true);
			await api.updateTaskStatus({task_id: self.isID, new_status: 'in_progress'});
			self.setStatus("in_progress");
			self.inProgressBtn.setIsDisabled(false);
			} catch(e) {
				console.log(e);
			}
		}),
		self.doneBtn.setOnClick(async () => {
			try {
				self.doneBtn.setIsDisabled(true);
			await api.updateTaskStatus({task_id: self.isID, new_status: 'done'});
			self.setStatus("done");
			self.doneBtn.setIsDisabled(false);
			} catch(e) {
				console.log(e);
			}
		}),
		self.createBtn.setOnClick(async () => {
			self.setIsPending(true);
			const date = new Date(self.dateSelect.value);
			await self.editTask({
				task_id: self.isID,
				task_data: {
					title: self.titleText.value,
					description: self.descriptionText.value,
					deadline: `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`,
					responsible_user_id: Number(self.taskResponsibleSelect.selected.value),
					days_for_completion: Number(self.daysField.value),
					dependencies: self.listDepends.map((item) => ({ task_id: item.task_id, type: item.depend}))
				}
			})
		}),
		self.deleteBtn.setOnClick(async () => {
			self.setIsPending(true);
			self.deleteTask({task_id: self.isID})
		})

	}
}))
.actions((self) => ({
	async start(id: number) {
		console.log(2)
		self.setIsId(id)
		// здесь логика того что будет происходить при открытии страницы
		await self.fetchUserSelect()
		
		self.getTask({task_id: id})
	},
}))
.create({});