import { TextField, TextFieldVariants } from "@mui/material";
import { TVMTextFieldInstance } from "./VMTextField";
import { observer } from "mobx-react-lite";
import { TVMNumberTextFieldInstance } from "./VMNumberTextField";

type props = {
	model: TVMTextFieldInstance | TVMNumberTextFieldInstance;
	className?: string;
}

const VTextField: React.FC<props> = ({model, className}) => {
	const { label, value, variant, isError, helperText, onChange } = model
	return (
		<TextField 
			className={className}
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