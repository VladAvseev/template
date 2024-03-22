import { types } from "mobx-state-tree";

export const editTask = types.model('editTask')
.volatile(() => ({
	// здесь будут модели компонентов страницы
}))
.views(() => ({

}))
.actions(() => ({
	// здесь другие методы страницы
}))
.actions(() => ({
	start(id: string) {
		console.log(id);
		// здесь логика того что будет происходить при открытии страницы
	}
}))
.create({});