import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import { TimeLineRow } from "./TimelineRow";
import { HeaderCell } from "./HeaderCell";
import { dependency } from "../models";
import { CircularProgress } from "@mui/material";

const useStyles = makeStyles(() => ({
	main: {
		position: 'relative',
		width: '100%',
		overflow: 'scroll',
		height: 'calc(100vh - 195px)',
		'&::-webkit-scrollbar': {
			opacity: 0,
			width: 5,
			height: 5,
		},
		'&::-webkit-scrollbar-thumb': {
			borderRadius: 10,
			background: '#444444'
		}
	},
	container: {
		position: 'sticky',
		zIndex: 2,
		top: 0,
		minWidth: 900,
		height: 20,
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
		margin: '0 auto 10px',
	},
	tableWrapper: {
		margin: '20px 0 0 0',
	},
	loaderWrapper: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		padding: '200px 0 0 0',
	}
}));

export const Timeline: React.FC = observer(() => {
	const { timeline, startDate, finishDate, daysCount, daysRow } = dependency;
	
	const styles = useStyles();
	return (
		<div className={styles.main}>
			{timeline.isPending 
				? <div className={styles.loaderWrapper}>
						<CircularProgress />
					</div> 
				: (<>
						<div className={styles.container}>
							{daysRow.map((date, index) => <HeaderCell key={index} date={date} index={index}/>)}
						</div>
						<div className={styles.tableWrapper}>
							{timeline.tasks.map((task) => <TimeLineRow key={task.id} task={task} startDate={startDate} finishDate={finishDate} daysCount={daysCount} daysRow={daysRow} />)}
						</div>
					</>)
			}
		</div>
)});