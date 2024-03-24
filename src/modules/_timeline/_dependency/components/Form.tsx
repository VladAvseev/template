import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "@mui/material";
import VDatePicker from "../../../../mvvm/DatePicker/VDatePicker";
import { form } from "../models/form";
import VButton from "../../../../mvvm/Button/VButton";
import { useEffect } from "react";

const useStyles = makeStyles(() => ({
	container: {
		width: '100%',
		height: 80,
		display: 'flex',
		alignItems:'center',
		justifyContent: 'flex-end',
		gap: 10,
		padding: '0 20px',
	}
}))

type props = {
	id: number;
};

export const Form: React.FC<props> = ({ id }) => {
	const { deadline, send, setId } = form;

	useEffect(() => {
		setId(id);
	}, [])

	const styles = useStyles();
	return (
		<Paper elevation={5} className={styles.container}>
			<Typography>Хотите изменить дату дедлайна?</Typography>
			<VDatePicker model={deadline}/>
			<VButton model={send}/>
		</Paper>
	)
};