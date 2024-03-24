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

export const createTask = types.model('createTask')
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
	taskStatusSelect: VMSelect.create({
		label: "Статус задачи",
		options: [MSelectOption.create ({
			label: "Создана",
			value: "to_do",
			isSelected: false,
			isDisabled: false,
		}), MSelectOption.create ({
			label: "В процессе",
			value: "in_progres",
			isSelected: false,
			isDisabled: false,
		}), MSelectOption.create ({
			label: "Выполнена",
			value: "done",
			isSelected: false,
			isDisabled: false,
		})]
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
				value: "Следующая",
				isSelected: false,
				isDisabled: false,
			}),
			MSelectOption.create ({
				label: "Предыдущая",
				value: "Предыдущая",
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
	list: [	],
	deliteDependBtn: VMButton.create({
		text: "Удалить связь"
	})
}))
.views((self) => ({
	get data() {
		return {
				title: self.titleText.value,
				description: self.descriptionText.value,
				deadline: self.dateSelect.value,
				responsibleUserID: {},
				estimated_completion_time: self.daysField.value,
				dependedependencies: [ ]	
			}
	},
	get dependTask() {
		return {
			task_id: "",
			type: ""
		}
	}
}))
.actions((self) => ({
	setIsForm(value: boolean) {
		self.isForm = value
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
	}
}))
.actions((self) => ({
	afterCreate(){
		self.createBtn.setOnClick(() => {console.log(self.data)}),
		self.addBtn.setOnClick(() => {self.setIsForm(true)}),
		self.setConnectionBtn.setOnClick(() => {
			self.setIsForm(false);
			
		})
	}
	// здесь другие методы страницы
}))
.actions((self) => ({
	start() {
		console.log(2)
		// здесь логика того что будет происходить при открытии страницы
		self.fetchUserSelect()
		self.fetchTaskList()
	},
}))
.create({});