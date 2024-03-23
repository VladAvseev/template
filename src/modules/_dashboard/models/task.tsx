import { Instance, types } from "mobx-state-tree"
import { Responsible } from "./responsible_user"

export type TTaskInstance = Instance<typeof Task>;
export const Task =  types.model("Task", {
    id: types.integer,
    title: types.string,
    deadline: types.Date,  // dd.mm.yyyy
    delay_deadline: types.maybeNull(types.Date), // dd.mm.yyyy
    responsible: Responsible
})