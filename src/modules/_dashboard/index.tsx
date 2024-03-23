// import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { dashboard } from "./models";
import { ColumnComponent } from "./components/column_component/ColumnComponent";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
	dashboard: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	}
}));

export const DashboardPage: React.FC = () => {
	const { start } = dashboard;

	useEffect(() => {
		start();
	}, []);

	const styles = useStyles();
	return (
		<div className={styles.dashboard}>
			<ColumnComponent
				status={ dashboard.columns[0] }
			/>
			<ColumnComponent
				status={ dashboard.columns[0] }
			/>
			<ColumnComponent
				status={ dashboard.columns[0] }
			/>
			<ColumnComponent
				status={ dashboard.columns[0] }
			/>
		</div>
	)
};