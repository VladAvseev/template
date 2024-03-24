import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Timeline } from "./components/Timeline";
import { useParams } from "react-router-dom";
import { dependency } from "./models";
import { Form } from "./components/Form";

const useStyles = makeStyles(() => ({
	page: {
		width: '90vw',
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		// justifyContent: 'center',
		boxShadow: '2px 2px 10px  #C2C2C2', 
		padding: 5,
		borderRadius: 10,
		gap: 5,

	}
}));

export const DependencyTimelinePage: React.FC = observer(() => {
	const { start } = dependency;
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			start(Number(id));
		}
	}, []);
	
	const styles = useStyles();
	return <div className={styles.page}><Timeline /><Form id={Number(id)} /></div>
});