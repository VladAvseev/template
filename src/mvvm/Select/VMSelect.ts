import { Instance, types } from "mobx-state-tree";
import MSelectOption from "./MSelectOption";
import { TUser } from "../../types/TUser";
import { TSelectTask } from "../../types/TSelectTask";

export type TVMSelectInstance = Instance<typeof VMSelect>;

const VMSelect = types.model('VMSelect', {
	options: types.array(MSelectOption),
	label: types.optional(types.string, ''),
})
.views((self) => ({
	get selected(): string {
		return self.options.filter((option) => option.isSelected)[0]?.value || '';
	},
}))
.actions((self) => ({
	onChange(item: any) {
		self.options.forEach((option) => {
			if (item.target.value === option.value) {
				option.setIsSelected(true);
			} else {
				option.setIsSelected(false);
			}
		})
	},
	setOptions(value: TUser[]) {
		self.options = value.map((user) => 
		MSelectOption.create({
			label: user.name,
			value: user.id.toString(),
			isSelected: false,
			isDisabled: false	
		})
		)
	},
	setListTasks(value: TSelectTask[]) {
		self.options = value.map((task) =>
			MSelectOption.create({
				label: task.title,
				value: task.id.toString(),
				isSelected: false,
				isDisabled: false
			})
		)
	}
}))
export default VMSelect;