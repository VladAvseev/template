
import { DateTimePicker } from "@mui/x-date-pickers"
import { TVMDatePickerInstance } from "./VMDatePicker";

type props = {
	model: TVMDatePickerInstance;
}

const VDatePicker: React.FC<props> = ({model}) => {
	const { label, onChange } = model
	return (
		<DateTimePicker 
			label={label}
			onChange={onChange} 
		/>				
	)
};
export default VDatePicker;