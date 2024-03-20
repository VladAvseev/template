import { Instance, types } from "mobx-state-tree";

export type TVMButtonInstance = Instance<typeof VMButton>;

const VMButton = types.model('VMButton', {
	text: '',
	isDisabled: false,
})
.actions(() => ({
	onClick() {},
}))
.actions((self) => ({
	setOnClick(callback: () => void) {
		self.onClick = callback;
	},
	setText(value: string) {
		self.text = value;
	},
	setIsDisabled(value: boolean) {
		self.isDisabled = value;
	},
	toggleIsDisabled() {
		self.isDisabled = !self.isDisabled;
	}
}));
export default VMButton;