import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
	cell: {
		border: '1px solid black',
		minWidth: '100px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
	}
}))

type props = {
	date: Date;
	index: number;
}

export const HeaderCell: React.FC<props> = ({ date, index }) => {

	const styles = useStyles();
	return <div className={styles.cell} style={{gridColumn: `${index + 1}/${index + 2}`}}>{date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</div>
};