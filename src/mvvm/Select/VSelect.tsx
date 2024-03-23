import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TVMSelectInstance } from "./VMSelect";
import { TMSelectOptionInstance } from "./MSelectOption";
import { observer } from "mobx-react-lite";

type props = {
	model: TVMSelectInstance;
	className?: string;
	formControlClassName?: string;
	labelClassName?: string;
}

const VSelect: React.FC<props> = ({model, className, formControlClassName, labelClassName}) => {
	const { selected, onChange, options, label } = model
	return (
		<FormControl fullWidth className={formControlClassName}>
			<InputLabel 
				id="select-label"
				className={labelClassName}
			>
				{label}
			</InputLabel>
			<Select
				label={label}
				labelId="select-label"
				className={className}
				fullWidth={true}
				value={selected}
				onChange={onChange}
			>
				{options.map((option: TMSelectOptionInstance) => (
					<MenuItem 
						key={option.value}
						value={option.value} 
						disabled={option.isDisabled}
					>{option.label}</MenuItem>
				))}
			</Select>
		</FormControl>	
	)
};
export default observer(VSelect);