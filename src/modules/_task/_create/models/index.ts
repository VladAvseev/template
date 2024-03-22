import { types } from "mobx-state-tree";
import VMTextField from "../../../../mvvm/TextField/VMTextField";
import VMButton from "../../../../mvvm/Button/VMButton";
import VMSelect from "../../../../mvvm/Select/VMSelect";
import MSelectOption from "../../../../mvvm/Select/MSelectOption";
import VMDatePicker from "../../../../mvvm/DatePicker/VMDatePicker";

export const createTask = types.model('createTask')
.volatile(() => ({
	// здесь будут модели компонентов страницы
	titleText: VMTextField.create({
		label: "Название задачи"
	}),
	descriptionText : VMTextField.create({
		label: "Описание задачи"
	}),
	taskStatusSelect: VMSelect.create({
		options: [MSelectOption.create ({
			label: "Создана",
			value: "Создана",
			isSelected: false,
			isDisabled: false,
		}), MSelectOption.create ({
			label: "Назначен ответственный",
			value: "Назначен ответственный",
			isSelected: false,
			isDisabled: false,
		}), MSelectOption.create ({
			label: "В процессе выполнения",
			value: "В процессе выполнения",
			isSelected: false,
			isDisabled: false,
		}), MSelectOption.create ({
			label: "На проверке",
			value: "На проверке",
			isSelected: false,
			isDisabled: false,
		}), MSelectOption.create ({
			label: "Выполнена",
			value: "Выполнена",
			isSelected: false,
			isDisabled: false,
		})]
	}),
	taskResponsibleSelect: VMSelect.create({
		options: [MSelectOption.create ({
			label: "Валя",
			value: "Валя",
			isSelected: false,
			isDisabled: false,
		}), MSelectOption.create ({
			label: "Влад",
			value: "Влад",
			isSelected: false,
			isDisabled: false,
		}), MSelectOption.create ({
			label: "Юра",
			value: "Юра",
			isSelected: false,
			isDisabled: false,
		}), MSelectOption.create ({
			label: "Артем",
			value: "Артем",
			isSelected: false,
			isDisabled: false,
		}), MSelectOption.create ({
			label: "Вика",
			value: "Вика",
			isSelected: false,
			isDisabled: false,
		})]
	}),
	dateSelect: VMDatePicker.create({}),
	createBtn: VMButton.create({
		text: "Создать задачу"
	}),
	taskSelect: VMSelect.create({
		options: [
		MSelectOption.create ({
			label: "Создать фичу",
			value: "Создать фичу",
			isSelected: false,
			isDisabled: false,
		}),
		MSelectOption.create ({
			label: "Пофиксить баг",
			value: "Пофиксить баг",
			isSelected: false,
			isDisabled: false,
		})
		]
	}),
	connectionSelect: VMSelect.create({
		options: [
			MSelectOption.create ({
				label: "Дочерняя",
				value: "Дочерняя",
				isSelected: false,
				isDisabled: false,
			}),
			MSelectOption.create ({
				label: "Родительская",
				value: "Родительская",
				isSelected: false,
				isDisabled: false,
			})
			]
	}),
	setConnectionBtn: VMButton.create({
		text: "Сохранить связь"
	})
}))
.views((self) => ({
	get data() {
		return {taskName: self.titleText.value,
				description: self.descriptionText.value,
				taskSelect: self.taskResponsibleSelect.selected,
				taskStatus: self.taskStatusSelect.selected,
				taskDate: self.dateSelect.value
			}
	}
}))
.actions((self) => ({
	afterCreate(){
		self.createBtn.setOnClick(() => {console.log(self.data)}),
		self.setConnectionBtn.setOnClick(() => {})
	}
	// здесь другие методы страницы
}))
.actions(() => ({
	start() {
		// здесь логика того что будет происходить при открытии страницы
	},
}))
.create({});