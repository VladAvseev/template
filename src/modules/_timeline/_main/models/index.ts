import { types } from "mobx-state-tree";

export const main = types.model('editTask')
.volatile(() => ({
	// здесь будут модели компонентов страницы
}))
.views(() => ({

}))
.actions(() => ({
	// здесь другие методы страницы
}))
.actions(() => ({
	start() {
		// здесь логика того что будет происходить при открытии страницы
	},
}))
.create({});