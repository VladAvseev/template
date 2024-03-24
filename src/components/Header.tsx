import { makeStyles } from "@material-ui/styles";
import { Link, Paper } from "@mui/material";
import { ReportButton } from "./ReportButton";

const useStyles = makeStyles(() => ({
	header: {
		width: '100vw',
		position: 'fixed',
		top: 0,
		left: 0,
		height: 60,
		display: 'flex',
		alignItems: 'center',
		padding: 15,
		justifyContent: 'space-between',
	},
	flex: {
		display: 'flex',
		gap: 15,
		alignItems: 'center',
	}
}));

export const Header: React.FC = () => {
	const styles = useStyles();

	if (location.pathname.includes('main_timeline')) {
		return (
			<Paper className={styles.header}>
				<div className={styles.flex}>
				<Link href={'/dashboard'} >Доска задач</Link>
				<Link href={'/create_task'} >Создать задачу</Link>
				</div>
				<ReportButton />
			</Paper>
		)
	}	
	
	if (location.pathname.includes('/dashboard')) {
		return (
			<Paper className={styles.header}>
				<div className={styles.flex}>
				<Link href={'/main_timeline'} >Таймлайн</Link>
				<Link href={'/create_task'} >Создать задачу</Link>
				</div>
				<ReportButton />
			</Paper>
		)
	}	
	
	if (location.pathname.includes('dependency_timeline')) {
		return (
			<Paper className={styles.header}>
				<div className={styles.flex}>
				<Link href={'/dashboard'} >Доска</Link>
				<Link href={'/main_timeline'} >Таймлайн</Link>	
				<Link href={'/create_task'} >Создать задачу</Link>
				</div>
				<ReportButton />
			</Paper>
		)
	}	
	
	if (location.pathname.includes('edit_task')) {
		return (
			<Paper className={styles.header}>
				<div className={styles.flex}>
				<Link href={'/dashboard'} >Доска задач</Link>
				<Link href={'/main_timeline'} >Таймлайн</Link>
				<Link href={'/create_task'} >Создать задачу</Link>
				</div>
				<ReportButton />
			</Paper>
		)
	}	
	
	if (location.pathname.includes('create_task')) {
		return (
			<Paper className={styles.header}>
				<div className={styles.flex}>
				<Link href={'/dashboard'} >Доска</Link>
				<Link href={'/main_timeline'} >Таймлайн</Link>
				</div>
				<ReportButton />
			</Paper>
		)
	}	

	return <Paper className={styles.header} />;
};