import { types } from "mobx-state-tree";
import { Statuses } from "./status";

export const dashboard = types.model('dashboard')
.volatile(() => ({
	// здесь будут модели компонентов страницы
	tasks: Statuses.create()	
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