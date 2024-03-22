import { Instance } from "mobx-state-tree";
import VMTextField from "./VMTextField";

export type TVMNumberTextFieldInstance = Instance<typeof VMNumberTextField>;

const VMNumberTextField = VMTextField.named('VMNamedTextField')
.actions((self) => ({
	onChange(value: string) {
		if (value && Number.isNaN(Number(value))) {
			self.setIsError(true);
			self.setHelperText('Можно вводить только числа');
			return;
		}
		self.setIsError(false);
		self.setHelperText('');
		self.setValue(value);

	}
}));
export default VMNumberTextField;