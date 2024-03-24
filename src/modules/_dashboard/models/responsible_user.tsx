import { types } from "mobx-state-tree"

export const Responsible = types.model("Responsible", {
    user_id: types.maybeNull(types.number),
    username: types.maybeNull(types.string)
})