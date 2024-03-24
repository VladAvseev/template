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

export const editTask = types.model('createTask')
.volatile(() => ({
	// здесь будут модели компонентов страницы

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
		text: "To do"
	}),
	inProgressBtn: VMButton.create({
		text: "In progress"
	}),
	doneBtn: VMButton.create({
		text: "Done"
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
	listDepends: [

	],
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
	setStatus(value: string) {
		self.status = value
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
	async setListDepends(value: TDependTasks[]){
		self.listDepends
	},
	async getTask(value: TGetTaskDescriptionParams){
		const res = await api.getTaskDescription(value);
		const { data: task } = res;
		self.titleText.value = task.title;
		self.descriptionText.value = task.description;
		self.daysField.value = task.days_for_completion.toString()
	}
}))
.actions((self) => ({
	afterCreate(){
		self.addBtn.setOnClick(() => {self.setIsForm(true); console.log(self.isForm)}),
		self.setConnectionBtn.setOnClick(() => {
			self.setIsForm(false);
			self.setListDepends([...self.listDepends, 
				{id: Number(self.taskSelect.selected.value), 
					name: self.taskSelect.selected.label, 
					depend: self.connectionSelect.selected.value as TDependencyType}]);
		}),
		self.toDoBtn.setOnClick(() => {
			self.setStatus("to_do")
		}),
		self.inProgressBtn.setOnClick(() => {
			self.setStatus("in_progres")
		}),
		self.doneBtn.setOnClick(() => {
			self.setStatus("done")
		})

	}
}))
.actions((self) => ({
	start(id: number) {
		console.log(2)
		// здесь логика того что будет происходить при открытии страницы
		self.fetchUserSelect()
		self.getTask({task_id: id})
	},
}))
.create({});