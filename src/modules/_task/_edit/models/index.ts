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
		text: "Сохранить изменения"
	}),
	taskSelect: VMSelect.create({
		label: "Выбор задачи",
		options: [
		MSelectOption.create ({
			label: "Задача 5",
			value: "Задача 5",
			isSelected: false,
			isDisabled: false,	
		}),
		MSelectOption.create ({
			label: "Задача 6",
			value: "Задача 6",
			isSelected: false,
			isDisabled: false,
		})
		]
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
	list: [
		DependTask.create({
			id: 1,
    		title: "Задача 1",
    		type: "Предшествующая",
    		status: "В процессе"
		}),
		DependTask.create({
			id: 2,
    		title: "Задача 2",
    		type: "Предшествующая",
    		status: "Завершена"
		}),
		DependTask.create({
			id: 4,
    		title: "Задача 4",
    		type: "Следующая",
    		status: "Создана"
		})
	]
}))
.views((self) => ({
	get data() {
		return {
				taskName: self.titleText.value,
				description: self.descriptionText.value,
				taskSelect: self.taskResponsibleSelect.selected,
				taskStatus: self.taskStatusSelect.selected,
				taskDate: self.dateSelect.value
			}
	},
	get dependTask() {
		return {
			id: 7,
			title: self.taskSelect.selected.valueOf,
			type: self.connectionSelect.selected.valueOf,
			status: "Назначена"
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
	}
}))
.actions((self) => ({
	afterCreate(){
		self.createBtn.setOnClick(() => {console.log(self.data)}),
		self.addBtn.setOnClick(() => {self.setIsForm(true); console.log(self.isForm)}),
		self.setConnectionBtn.setOnClick(() => {self.setIsForm(false); console.log(self.isForm);
		})
	}
	// здесь другие методы страницы
}))
.actions((self) => ({
	start() {
		console.log(2)
		// здесь логика того что будет происходить при открытии страницы
		self.fetchUserSelect()
	},
}))
.create({});