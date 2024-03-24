import { makeStyles } from "@material-ui/styles";
import { Link, Paper } from "@mui/material";

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
		gap: 15,
	},
}));

export const Header: React.FC = () => {
	const styles = useStyles();

	if (location.pathname.includes('main_timeline')) {
		return (
			<Paper className={styles.header}>
				<Link href={'/dashboard'} >Доска</Link>
				<Link href={'/create_task'} >Создать задачу</Link>
			</Paper>
		)
	}	
	
	if (location.pathname.includes('/dashboard')) {
		return (
			<Paper className={styles.header}>
				<Link href={'/main_timeline'} >Таймлайн</Link>
				<Link href={'/create_task'} >Создать задачу</Link>
			</Paper>
		)
	}	

	if (location.pathname.includes('dependency_timeline')) {
		return (
			<Paper className={styles.header}>
				<Link href={'/dashboard'} >Доска</Link>
				<Link href={'/main_timeline'} >Таймлайн</Link>	
				<Link href={'/create_task'} >Создать задачу</Link>
			</Paper>
		)
	}	
	
	if (location.pathname.includes('edit_task')) {
		return (
			<Paper className={styles.header}>
				<Link href={'/dashboard'} >Доска</Link>
				<Link href={'/main_timeline'} >Таймлайн</Link>
				<Link href={'/create_task'} >Создать задачу</Link>
			</Paper>
		)
	}	

	if (location.pathname.includes('create_task')) {
		return (
			<Paper className={styles.header}>
				<Link href={'/dashboard'} >Доска</Link>
				<Link href={'/main_timeline'} >Таймлайн</Link>
			</Paper>
		)
	}	

	return <Paper className={styles.header} />;
};