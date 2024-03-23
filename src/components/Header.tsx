import { makeStyles } from "@material-ui/styles";
import { Link, Paper } from "@mui/material";

const useStyles = makeStyles(() => ({
	header: {
		width: '100vw',
		position: 'fixed',
		top: 0,
		left: 0,
		height: 50,
		display: 'flex',
		alignItems: 'center',
		padding: 15,
		gap: 15,
	},
}));

export const Header: React.FC = () => {
	const styles = useStyles();
	return (
		<Paper className={styles.header}>
			{
				location.pathname.includes('timeline') 
					? <>
							<Link href={'/dashboard'} >Доска</Link>
							<Link href={'/create_task'} >Создать задачу</Link>
						</>
					: location.pathname.includes('/dashboard') 
					? <>
								<Link href={'/main_timeline'} >Таймлайн</Link>
								<Link href={'/create_task'} >Создать задачу</Link>
							</> 
						: <>
							<Link href={'/dashboard'} >Доска</Link>
							<Link href={'/main_timeline'} >Таймлайн</Link>
							</>
			}
		</Paper>
	)
};