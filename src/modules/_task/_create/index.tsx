// import { makeStyles } from "@material-ui/styles";
import { createTask } from "./models";
import { useEffect } from "react";

// const useStyles = makeStyles(() => ({
// }));

export const CreateTaskPage: React.FC = () => {
	const { start } = createTask;

	useEffect(() => {
		start();
	}, []);

	// const styles = useStyles();
	return <>CREATE TASK PAGE</>
};
