import { TextField, TextFieldVariants } from "@mui/material";
import { TVMTextFieldInstance } from "./VMTextField";
import { observer } from "mobx-react-lite";

type props = {
	model: TVMTextFieldInstance;
}

const VTextField: React.FC<props> = ({model}) => {
	const { label, variant, isError, helperText, onChange } = model
	return (
		<TextField 
			onChange={(event) => onChange(event.target.value)}
			label={label}
			variant={variant as TextFieldVariants}
			error={isError}
			helperText={helperText}
		/>				
	)
};
export default observer(VTextField);