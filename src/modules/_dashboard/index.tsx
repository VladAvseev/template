// import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { dashboard } from "./models";
import { ColumnComponent } from "./components/column_component/ColumnComponent";

// const useStyles = makeStyles(() => ({
// }));

export const DashboardPage: React.FC = () => {
	const { start } = dashboard;

	useEffect(() => {
		start();
	}, []);

	// const styles = useStyles();
	return (
		<ColumnComponent
			status={ dashboard.columns[0] }
		/>
	)
};