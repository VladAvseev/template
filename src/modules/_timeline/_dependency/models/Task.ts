import { Instance, types } from "mobx-state-tree";
import { User } from "./User";
import { Warning } from "./Warning";

export type TTaskInstance = Instance<typeof Task>;

export const Task = types.model('Task', {
	id: types.number,
	title: types.string,
	status: types.string,
	start_date: types.Date,
	finish_date: types.Date,
	deadline: types.Date,
	responsible: User,
	warnings: types.optional(types.array(Warning), []),
});