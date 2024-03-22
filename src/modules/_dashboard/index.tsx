// import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { dashboard } from "./models";

// const useStyles = makeStyles(() => ({
// }));

export const DashboardPage: React.FC = () => {
	const { start } = dashboard;

	useEffect(() => {
		start();
	}, []);

	// const styles = useStyles();
	return <>DASHBOARD PAGE</>
};