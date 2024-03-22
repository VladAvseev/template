// import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router-dom";
import { dependency } from "./models";
import { useEffect } from "react";

// const useStyles = makeStyles(() => ({
// }));

export const DependencyTimelinePage: React.FC = () => {
	const { start } = dependency;
	const { id } = useParams();

	useEffect(() => {
		if(id) {
			start(Number(id));
		}
	}, []);
	
	// const styles = useStyles();
	return <>DEPENDENCY TIMELINE {id} PAGE</>
};