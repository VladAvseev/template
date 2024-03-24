import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
	icon: {
		width: 20,
		height: 20,
		borderRadius: '50%',
		background: ' #FF0066',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

export const CrossIcon: React.FC = () => {

	const styles = useStyles();
	return (
		<div className={styles.icon}>!</div>
	)
};