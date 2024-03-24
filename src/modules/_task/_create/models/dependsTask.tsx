import { Instance, types } from "mobx-state-tree"

export type TDependTaskInstance = Instance<typeof DependTask>;
export const DependTask =  types.model("DependTask", {
    task_id: types.integer,
    title: types.string,
    type: types.string,
    depend: types.string
});

