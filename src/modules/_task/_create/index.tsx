import { makeStyles } from "@material-ui/styles";
import { createTask } from "./models";
import { useEffect} from "react";
import { Paper } from "@mui/material";
import VTextField from "../../../mvvm/TextField/VTextField";
import VButton from "../../../mvvm/Button/VButton";
import VSelect from "../../../mvvm/Select/VSelect";
import VDatePicker from "../../../mvvm/DatePicker/VDatePicker";
import { ColumnDepend } from "../components/ColumnDepend";
import { observer } from "mobx-react-lite";


 const useStyles = makeStyles(() => ({
	taskForm: {
		padding: "20px",
		width: "50%", 
		margin: "0 auto"
	},
	container: {
		display: "flex",
		justifyContent: "space-between",
		marginBottom: "10px"
	},
	containerBtn: {
		display: "flex",
		justifyContent: "space-between",
		marginTop: "10px"
	},
	column: {
		width: "45%"
	},
	taskName: {
		width: "100%",
		marginBottom: "10px"
	},
	description: {
		width: "100%",
	},
	params: {
		width: "45%"
	},
	taskSelect: {
		width: "100%",
		marginBottom: "10px"
	},
	paperClmn: {
		width: "98%",
		padding: "10px"
	},
	header: {
		textAlign: "center"
	}
 }));

export const CreateTaskPage: React.FC = observer(() => {
	const { start, isForm, 
		addBtn, listDepends, deleteBtn, 
		daysField, titleText, createBtn, 
		taskResponsibleSelect, descriptionText, 
		taskStatusSelect, dateSelect, taskSelect, 
		connectionSelect, setConnectionBtn} = createTask;


	useEffect(() => {
		start();
	}, []);

	const styles = useStyles();
	return (
		<Paper className={styles.taskForm} elevation={3}>
			<h1 className={styles.header}>Создание задачи</h1>
			<div className={styles.container}>
				<span className={styles.column}>
					<VTextField className={styles.taskName} model={titleText}/>
					<VTextField className={styles.description} model={descriptionText}/>
				</span>
				<span className={styles.column}>
					<VSelect className={styles.taskSelect} model={taskStatusSelect}/>
					<VSelect className={styles.taskSelect} model={taskResponsibleSelect}/> 
					<div className={styles.container}>                                     	
						<VDatePicker className={styles.params} model={dateSelect}/>
						<VTextField className={styles.params} model={daysField}/>
					</div> 
				</span>
			</div>
			<ColumnDepend tasks={listDepends} />
			<div>
				{isForm
					? <Paper className={styles.paperClmn}>
						<VSelect className={styles.taskSelect} model={taskSelect}/>
						<VSelect className={styles.taskSelect} model={connectionSelect}/>
						<VButton className={styles.taskSelect} model={setConnectionBtn}/>
				 	  </Paper> 
					: <VButton className={styles.column} model={addBtn}/>  
				}
			</div>
			<div className={styles.containerBtn}>
				<VButton model={deleteBtn}/>
				<VButton model={createBtn}/>
			</div>                      
  		</Paper> 
		);
		
});