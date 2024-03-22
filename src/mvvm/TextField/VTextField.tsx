import { TextField, TextFieldVariants } from "@mui/material";
import { TVMTextFieldInstance } from "./VMTextField";
import { observer } from "mobx-react-lite";
import { TVMNumberTextFieldInstance } from "./VMNumberTextField";

type props = {
	model: TVMTextFieldInstance | TVMNumberTextFieldInstance;
}

const VTextField: React.FC<props> = ({model}) => {
	const { label, value, variant, isError, helperText, onChange } = model
	return (
		<TextField 
			onChange={(event) => onChange(event.target.value)}
			label={label}
			variant={variant as TextFieldVariants}
			error={isError}
			helperText={helperText}
			value={value}
		/>				
	)
};
export default observer(VTextField);