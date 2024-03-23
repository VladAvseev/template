import { types } from "mobx-state-tree"

export const Responsible = types.model("Responsible", {
    user_id: types.integer,
    username: types.string,
})