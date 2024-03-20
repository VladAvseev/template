import { Instance, types } from "mobx-state-tree";

export type TVMDatePickerInstance = Instance<typeof VMDatePicker>;

const VMDatePicker = types.model('VMDatePicker', {
	label: '',
	value: '',
})
.actions((self) => ({
	setValue(value: string) {
		self.value = value;
	},
	setLabel(value: string) {
		self.label = value;
	},
}))
.actions((self) => ({
	onChange(value) {
		self.setValue(value.format());
	}
}))
export default VMDatePicker;