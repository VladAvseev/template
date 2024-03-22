import { types } from "mobx-state-tree";

export const dependency = types.model('dependency')
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
		// здесь логика того что будет происходить при открытии страницы
		self.setId(id);
	},
}))
.create({});