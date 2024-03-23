import { makeStyles } from "@material-ui/styles";
import { TTaskInstance } from "../models/Task";
import { TaskComponent } from "./TaskComponent";

const useStyles = makeStyles(() => ({
}));

type props = {
	startDate: Date;
	endDate: Date;
	task: TTaskInstance;
	daysRow: Date[];
}

export const TaskCells: React.FC<props> = ({ startDate, endDate, daysRow, task }) => {
	const startIndex = daysRow.map(date => date.getTime()).indexOf(startDate.getTime()) + 1;
	const endIndex = daysRow.map(date => date.getTime()).indexOf(endDate.getTime()) + 2;

	const styles = useStyles();
	return <div  style={{gridColumn: `${startIndex}/${endIndex}`, minWidth: 100 * (endIndex - startIndex)}}><TaskComponent task={task} /></div>
};