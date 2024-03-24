import { Instance, types } from "mobx-state-tree";

export type TWarningInstance = Instance<typeof Warning>
export const Warning = types.model({
    type: types.string,
    task_id: types.integer
})