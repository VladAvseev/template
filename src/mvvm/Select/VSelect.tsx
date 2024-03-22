import { MenuItem, Select } from "@mui/material";
import { TVMSelectInstance } from "./VMSelect";
import { TMSelectOptionInstance } from "./MSelectOption";
import { observer } from "mobx-react-lite";

type props = {
	model: TVMSelectInstance;
	className: string;
}

const VSelect: React.FC<props> = ({model, className}) => {
	const { selected, onChange, options } = model
	return (
  <Select
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
	)
};
export default observer(VSelect);