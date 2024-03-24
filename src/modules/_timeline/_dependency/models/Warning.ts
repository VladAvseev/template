import { types } from "mobx-state-tree";

export const Warning = types.model('Warning', {
	type: types.string,
	task_id: types.number,
});