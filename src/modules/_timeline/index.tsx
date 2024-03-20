import { makeStyles } from "@material-ui/styles";
import { timeline } from "./models";
import { useEffect } from "react";

const useStyles = makeStyles(() => ({
}));

export const TimelinePage: React.FC = () => {
	const { start } = timeline;

	useEffect(() => {
		start();
	}, []);
	
	const styles = useStyles();
	return <>TIMELINE PAGE</>
};