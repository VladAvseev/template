import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import { main } from "./models";
import { useEffect } from "react";
import { Timeline } from "./components/Timeline";

const useStyles = makeStyles(() => ({
	page: {
		width: '90vw',
		margin: '0 auto',
		display: 'flex',
		justifyContent: 'center',
		boxShadow: '2px 2px 10px  #C2C2C2', 
		padding: 5,
		borderRadius: 10,
	}
}));

export const MainTimelinePage: React.FC = observer(() => {
	const { start } = main;

	useEffect(() => {
			start();
	}, []);
	
	const styles = useStyles();
	return <div className={styles.page}><Timeline /></div>
});