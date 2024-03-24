import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import { main } from "../models";
import { TimeLineRow } from "./TimelineRow";
import { HeaderCell } from "./HeaderCell";

const useStyles = makeStyles(() => ({
	main: {
		width: '100%',
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		}
	},
	container: {
		minWidth: 900,
		height: 20,
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
		margin: '0 auto 10px',
	}
}));

export const Timeline: React.FC = observer(() => {
	const { timeline, startDate, finishDate, daysCount, daysRow } = main;
	
	const styles = useStyles();
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				{daysRow.map((date, index) => <HeaderCell key={index} date={date} index={index}/>)}
			</div>
			{timeline.tasks.map((task) => <TimeLineRow key={task.id} task={task} startDate={startDate} finishDate={finishDate} daysCount={daysCount} daysRow={daysRow} />)}
		</div>
		)
});