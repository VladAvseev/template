import { makeStyles } from "@material-ui/styles";
import { TTaskInstance } from "../models/Task";
import { WarningIcon } from "../../../../components/WarningIcon";

const useStyles = makeStyles(() => ({
	task: {
		width: '100%',
		height: '100%',
		padding: 10,
		opacity: 0.7,
		borderRadius: 5,
		color: 'white',
		'&:hover': {
			opacity: 0.75,
			border: '2px solid black',
		},
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	flex: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
	}
}));

type props = {
	task: TTaskInstance;
}

export const TaskComponent: React.FC<props> = ({ task }) => {

	const styles = useStyles();
	return (
		<div className={styles.task} style={{background: task.status === 'to_do' ? 'gray' : task.status === 'in_progress' ? 'blue' : 'green'}}>
			<div className={styles.flex}>
				<div>{'('}{task.id}{')'} {task.title}</div> <div>исполнитель:{task.responsible.name}</div>
			</div>
			<div className={styles.flex}>
				{task.warnings.length ? task.warnings.map((warn, index) => <WarningIcon key={index} {...warn} />) : null}
			</div>
		</div>
	)
};