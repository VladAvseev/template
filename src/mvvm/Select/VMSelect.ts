import { Instance, types } from "mobx-state-tree";
import MSelectOption from "./MSelectOption";

export type TVMSelectInstance = Instance<typeof VMSelect>;

const VMSelect = types.model('VMSelect', {
	options: types.array(MSelectOption),
})
.views((self) => ({
	get selected(): string {
		return self.options.filter((option) => option.isSelected)[0]?.value || '';
	},
}))
.actions((self) => ({
	onChange(item) {
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