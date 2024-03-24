import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
	icon: {
		width: 20,
		height: 20,
		background: ' #CC0000',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

export const CrossHardIcon: React.FC = () => {

	const styles = useStyles();
	return (
		<div className={styles.icon}>!</div>
	)
};