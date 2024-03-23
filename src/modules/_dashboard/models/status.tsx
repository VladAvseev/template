import { types } from "mobx-state-tree";
import { Task } from "./task";

export const Statuses = types.model("Status", {
    status_name: types.string,
    tasks: types.array(Task)
})