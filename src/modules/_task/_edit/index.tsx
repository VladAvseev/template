// import { makeStyles } from "@material-ui/styles";
import { editTask } from "./models";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// const useStyles = makeStyles(() => ({
// }));

const EditTaskPage: React.FC = () => {
	const { start } = editTask;
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			start(id);
		}
	}, []);

	// const styles = useStyles();
	return <>EDIT TASK {id} PAGE</>
};
export default EditTaskPage;