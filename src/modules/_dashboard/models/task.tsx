import { Instance, types } from "mobx-state-tree"
import { Responsible } from "./responsible_user"
import { Warning } from "./warning"

export type TTaskInstance = Instance<typeof Task>
export const Task =  types.model("Task", {
    id: types.integer,
    title: types.string,
    deadline: types.string,  // dd.mm.yyyy
    responsible: Responsible,
    warnings: types.array(Warning)
})