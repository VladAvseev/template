import { useEffect } from "react";
import { dashboard } from "./models";
import { ColumnComponent } from "./components/column_component/ColumnComponent";
import { makeStyles } from "@material-ui/styles";
import { ProgressBar } from "./components/progress_bar/ProgressBar";
import { Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
    dashboard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: "20px",
        overflowX: "auto"
    },
    title: {
        textAlign: "center",
    }
}));

export const DashboardPage: React.FC = () => {
	const { start } = dashboard;

	useEffect(() => {
		start();
	}, []);

	const styles = useStyles();
	return (
		<div>
			<ProgressBar currentProgress={ dashboard.currentProgress } />
			<Typography
				className={styles.title}
				variant="h5"
			>
				Dashboard
			</Typography>
			<div className={styles.dashboard}>
				{ dashboard.columns.length == 0
					? <>Пока ничего нет</>
					: dashboard.columns.map(column => <ColumnComponent status={column} />)
				}
			</div>
		</div>
	)
};