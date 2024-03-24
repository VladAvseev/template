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
import { TCreateTaskParams } from "../../../../api";
import { redirect } from "react-router-dom";


export const createTask = types.model('createTask')
.volatile(() => ({
	// здесь будут модели компонентов страницы
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
	taskResponsibleSelect: VMSelect.create({
		label: "Ответственный за задачу",
		options: []
	}),
	dateSelect: VMDatePicker.create({}),
	createBtn: VMButton.create({
		text: "Создать задачу"
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
	async createNewTask(value: TCreateTaskParams) {
		await api.createTask(value);
	}
}))
.actions((self) => ({
	afterCreate(){
		self.addBtn.setOnClick(() => {self.setIsForm(true)}),
		self.setConnectionBtn.setOnClick(() => {
			self.setIsForm(false);
			self.setListDepends([...self.listDepends, {
				task_id: Number(self.taskSelect.selected.value),
				depend: (self.connectionSelect.selected.value) as TDependencyType,
				type: self.connectionSelect.selected.label,
				title: self.taskSelect.selected.label
			}
				]);
		}),
		self.createBtn.setOnClick(async () => {
				self.setIsPending(true);
				const date = new Date(self.dateSelect.value);
				await self.createNewTask({
				title: self.titleText.value,
				description: self.descriptionText.value,
				deadline: `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`,
				responsible_user_id: Number(self.taskResponsibleSelect.selected.value),
				days_for_completion: Number(self.daysField.value),
				dependencies: self.listDepends.map((item) => ({ task_id: item.task_id, type: item.depend}))})
				window.location.replace('/dashboard');
			});
	// здесь другие методы страницы
}}))
.actions((self) => ({
	start() {
		console.log(2)
		// здесь логика того что будет происходить при открытии страницы
		self.fetchUserSelect()
		self.fetchTaskList()
	},
}))
.create({});