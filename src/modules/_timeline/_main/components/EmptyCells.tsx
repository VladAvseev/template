import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
	cell: {
	}
}))

type props = {
	startDate: Date;
	endDate: Date;
	daysRow: Date[];
}

export const EmptyCells: React.FC<props> = ({ startDate, endDate, daysRow }) => {
	const startIndex = daysRow.map(date => date.getTime()).indexOf(startDate.getTime()) + 1;
	const endIndex = daysRow.map(date => date.getTime()).indexOf(endDate.getTime()) + 2;

	const styles = useStyles();
	return <div className={styles.cell} style={{gridColumn: `${startIndex}/${endIndex}`, minWidth: 100 * (endIndex - startIndex)}} />
};