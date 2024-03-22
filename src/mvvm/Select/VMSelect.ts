import { Instance, types } from "mobx-state-tree";
import MSelectOption from "./MSelectOption";

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
	}
}))
export default VMSelect;