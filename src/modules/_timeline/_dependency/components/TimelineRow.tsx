import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import { TTaskInstance } from "../models/Task";
import { dateMinusOneDay, datePlusOneDay, datesDiference } from "../../../../utils/date";
import { DeadlineCell } from "./DeadlineCell";
import { EmptyCells } from "./EmptyCells";
import { TaskCells } from "./TaskCells";
import { TaskWithLateDeadlineCells } from "./TaskWithLateDeadlineCells";
import { TaskWithDeadlineCells } from "./TaskWithDeadlineCells";

const useStyles = makeStyles(() => ({
	gridContainer: {
		minHeight: 50,
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(100, 1fr))',
		margin: '0 auto 10px',
	}
}));

type prefs = {
	task: TTaskInstance;
	startDate: Date;
	finishDate: Date;
	daysCount: number;
	daysRow: Date[];
}

export const TimeLineRow: React.FC<prefs> = observer(({task, startDate, finishDate, daysRow}) => {
	const { 
		start_date,
		finish_date,
		deadline,
	} = task;

	const styles = useStyles();
	return (
		<div className={styles.gridContainer}>
			{datesDiference(start_date, startDate) > 0 
				? <EmptyCells startDate={startDate} endDate={dateMinusOneDay(start_date)} daysRow={daysRow}/>
				: null
			}
			{datesDiference(finish_date, deadline) > 0
				? <>
						<TaskWithLateDeadlineCells startDate={start_date} endDate={finish_date} deadline={deadline} task={task} daysRow={daysRow} />
						{datesDiference(finishDate, finish_date) > 0
							? <EmptyCells startDate={datePlusOneDay(finish_date)} endDate={finishDate} daysRow={daysRow} />
							: null
						}
					</>
				: null
			}
			{datesDiference(deadline, finish_date) === 0
				? <>
						<TaskWithDeadlineCells startDate={start_date} endDate={finish_date} task={task} daysRow={daysRow} />
						{datesDiference(finishDate, deadline) > 0
							? <EmptyCells startDate={datePlusOneDay(deadline)} endDate={finishDate} daysRow={daysRow} /> 
							: null
						}
					</>
				: null
			}
			{datesDiference(deadline, finish_date) > 0
				? <>
						<TaskCells startDate={start_date} endDate={finish_date} daysRow={daysRow} task={task} />
						{datesDiference(deadline, finish_date) > 1 
							? <EmptyCells startDate={datePlusOneDay(finish_date)} endDate={dateMinusOneDay(deadline)} daysRow={daysRow} /> 
							: null
						}
						<DeadlineCell startDate={deadline} endDate={deadline} daysRow={daysRow}/>
						{datesDiference(finishDate, deadline) > 0
							? <EmptyCells startDate={datePlusOneDay(deadline)} endDate={finishDate} daysRow={daysRow} /> 
							: null
						}
					</>
				: null
			}
		</div>
	)
});