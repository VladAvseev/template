// import { makeStyles } from "@material-ui/styles";
import { main } from "./models";
import { useEffect } from "react";

// const useStyles = makeStyles(() => ({
// }));

export const MainTimelinePage: React.FC = () => {
	const { start } = main;

	useEffect(() => {
			start();
	}, []);
	
	// const styles = useStyles();
	return <>MAIN TIMELINE PAGE</>
};