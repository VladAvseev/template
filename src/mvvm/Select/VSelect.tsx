import { MenuItem, Select } from "@mui/material";
import { TVMSelectInstance } from "./VMSelect";
import { TMSelectOptionInstance } from "./MSelectOption";
import { observer } from "mobx-react-lite";

type props = {
	model: TVMSelectInstance;
}

const VSelect: React.FC<props> = ({model}) => {
	const { selected, onChange, options } = model
	return (
  <Select
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