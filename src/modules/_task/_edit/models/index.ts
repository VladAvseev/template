import { types } from "mobx-state-tree";

export const editTask = types.model('editTask')
.volatile(() => ({
	// здесь будут модели компонентов страницы
	id: 0,
}))
.views(() => ({

}))
.actions((self) => ({
	// здесь другие методы страницы
	setId(value: number) {
		self.id = value;
	},
}))
.actions((self) => ({
	start(id: number) {
		self.setId(id);
		// здесь логика того что будет происходить при открытии страницы
	},
}))
.create({});