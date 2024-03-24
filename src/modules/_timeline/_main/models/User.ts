import { Instance, types } from "mobx-state-tree";

export type TUserInstance = Instance<typeof User>;

export const User = types.model('User', {
	id: types.number,
	name: types.string,
})