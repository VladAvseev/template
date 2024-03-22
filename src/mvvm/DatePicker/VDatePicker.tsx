
import { DateTimePicker } from "@mui/x-date-pickers"
import { TVMDatePickerInstance } from "./VMDatePicker";

type props = {
	model: TVMDatePickerInstance;
	className: string;
}

const VDatePicker: React.FC<props> = ({model, className}) => {
	const { label, onChange } = model
	return (
		<DateTimePicker 
			className={className}
			label={label}
			onChange={onChange} 
		/>				
	)
};
export default VDatePicker;