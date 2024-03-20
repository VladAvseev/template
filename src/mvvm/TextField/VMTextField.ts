import { Instance, types } from "mobx-state-tree";
import { TextFieldVariants } from "@mui/material";

export type TVMTextFieldInstance = Instance<typeof VMTextField>;

const VMTextField = types.model('VMTextField', {
	label: types.optional(types.string, ''),
	value: types.optional(types.string, ''),
	isError: types.optional(types.boolean, false),
	helperText: types.optional(types.string, ''),
	variant: types.optional(types.string, 'outlined')
})
.actions((self) => ({
	setValue(value: string) {
		self.value = value;
	},
	setLabel(value: string) {
		self.label = value;
	},
	setIsError(value: boolean) {
		self.isError = value;
	},
	setHelperText(value: string) {
		self.helperText = value;
	},
	setVariant(value: TextFieldVariants) {
		self.variant = value;
	},
}))
.actions((self) => ({
	onChange(value: string) {
		self.setValue(value);
	}
}))
.actions((self) => ({
	setOnChange(callback: (value: string) => void) {
		self.onChange = callback;
	}
}))
export default VMTextField;