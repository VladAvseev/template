import { useEffect } from "react";
import { dashboard } from "./models";
import { ColumnComponent } from "./components/column_component/ColumnComponent";
import { makeStyles } from "@material-ui/styles";
import { ProgressBar } from "./components/progress_bar/ProgressBar";
import { Paper, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(() => ({
    dashboard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: "20px",
        overflowX: "auto",
    },
    title: {
        textAlign: "center",
    },
	page: {
		width: "90vw",
		height: "calc(100vh - 110px)",
		overflow: "scroll",
		margin: "0 auto",

		'&::-webkit-scrollbar': {
			opacity: 0,
			width: 5,
			height: 5,
		},
		'&::-webkit-scrollbar-thumb': {
			borderRadius: 10,
			background: '#444444'
		}
	}
}));

export const DashboardPage: React.FC = observer(() => {
	const { start } = dashboard;

	useEffect(() => {
		start();
	}, []);

	const styles = useStyles();
	return (
		<Paper className={styles.page}>
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
					: dashboard.columns.map(column =>
						<ColumnComponent
							key={Math.random() * Math.random()}
							status={column}
						/>
					)
				}
			</div>
		</Paper>
	)
})