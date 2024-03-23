import { Instance, types } from "mobx-state-tree";
import { Task } from "./task";

export type TStatusInstance = Instance<typeof Status>
export const Status = types.model("Status", {
    status_name: types.string,
    tasks: types.array(Task)
})