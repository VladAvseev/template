import { SoftIcon } from "./SoftIcon";
import { TWarning } from "../types/TWarning";
import { Tooltip } from "@mui/material";
import { HardIcon } from "./HardIcon";
import { makeStyles } from "@material-ui/styles";
import { CrossSoftIcon } from "./CrossSoftIcon";
import { CrossHardIcon } from "./CrossHardIcon";

const useStyles = makeStyles(() => ({
	wrapper: {
		width: 20,
		height: 20,
		color: 'black',
	}
}))

type props = TWarning;

export const WarningIcon: React.FC<props> = ({ task_id, type }) => {
	const styles = useStyles();

	if (type === 'start_soft') {
		return <Tooltip placement="top" title="Рекомендуем приступить к задаче"><div className={styles.wrapper}><SoftIcon /></div></Tooltip>
	} else if (type === 'start_hard') {
		return <Tooltip placement="top" title="Рекомендуем срочко приступить к задаче"><div className={styles.wrapper}><HardIcon /></div></Tooltip>
	} else if (type === 'finish_soft') {
		return <Tooltip placement="top" title="Рекомендуем завершить задачу"><div className={styles.wrapper}><SoftIcon /></div></Tooltip>
	} else if (type === 'finish_hard') {
		return <Tooltip placement="top" title="Рекомендуем срочно завершить задачу"><div className={styles.wrapper}><HardIcon /></div></Tooltip>
	} else if (type === 'cross_soft') {
		return <Tooltip placement="top" title={`Дедлайн задачи (${task_id}) пересекает эту задачу`}><div className={styles.wrapper}><CrossSoftIcon /></div></Tooltip>
	} else if (type === 'cross_hard') {
		return <Tooltip placement="top" title={`Дедлайн задачи (${task_id}) сильно пересекает эту задачу`}><div className={styles.wrapper}><CrossHardIcon /></div></Tooltip>
	} else if (type === 'late_deadline') {
		return <Tooltip placement="top" title="Дедлайн просрочен"><div className={styles.wrapper}><HardIcon /></div></Tooltip>
	}
};