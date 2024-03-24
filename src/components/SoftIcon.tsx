import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
	icon: {
		width: 20,
		height: 20,
		borderRadius: '50%',
		background: ' #FF8000',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

export const SoftIcon: React.FC = () => {

	const styles = useStyles();
	return (
		<div className={styles.icon}>!</div>
	)
};