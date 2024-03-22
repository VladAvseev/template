import { makeStyles } from "@material-ui/styles";
import { createTask } from "./models";
import { useEffect} from "react";
import { Paper } from "@mui/material";
import VTextField from "../../../mvvm/TextField/VTextField";
import VButton from "../../../mvvm/Button/VButton";
import VSelect from "../../../mvvm/Select/VSelect";
import VDatePicker from "../../../mvvm/DatePicker/VDatePicker";


 const useStyles = makeStyles(() => ({
	 taskForm: {
		padding: "20px",
		maxWidth: "400px", 
		margin: "0 auto"
	} 
 }));

const CreateTaskPage: React.FC = () => {
	const { start, titleText, createBtn, taskResponsibleSelect, descriptionText, taskStatusSelect, dateSelect, taskSelect, connectionSelect, setConnectionBtn} = createTask;


	useEffect(() => {
		start();
	}, []);

	const styles = useStyles();
	return (
		<Paper className={styles.taskForm} elevation={3} >
			<VTextField model={titleText}/>
			<VTextField model={descriptionText}/>
			<VSelect model={taskStatusSelect}/>
			<VSelect model={taskResponsibleSelect}/>                                       	
			<VDatePicker model={dateSelect}/>
			<VSelect model={taskSelect}/>
			<VSelect model={connectionSelect}/>
			<VButton model={setConnectionBtn}/>                               
			<VButton model={createBtn}/>
  		</Paper> 
		);
		
};
export default CreateTaskPage;