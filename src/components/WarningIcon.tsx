import { SoftIcon } from "./SoftIcon";
import { TWarning } from "../types/TWarning";
import { Tooltip } from "@mui/material";
import { HardIcon } from "./HardIcon";

type props = TWarning;

export const WarningIcon: React.FC<props> = ({ task_id, type }) => {
	if (type === 'start_soft') {
		return <Tooltip placement="top" title="Рекомендуем приступить к задаче"><SoftIcon /></Tooltip>
	} else if (type === 'start_hard') {
		return <Tooltip placement="top" title="Рекомендуем срочко приступить к задаче"><HardIcon /></Tooltip>
	} else if (type === 'finish_hard') {
		return <Tooltip placement="top" title="Рекомендуем завершить задачу"><SoftIcon /></Tooltip>
	} else if (type === 'start_hard') {
		return <Tooltip placement="top" title="Рекомендуем срочно завершить задачу"><HardIcon /></Tooltip>
	} else if (type === 'cross_soft') {
		return <Tooltip placement="top" title={`Дедлайн задачи (${task_id}) пересекает эту задачу`}><SoftIcon /></Tooltip>
	} else if (type === 'start_hard') {
		return <Tooltip placement="top" title={`Дедлайн задачи (${task_id}) сильно пересекает эту задачу`}><HardIcon /></Tooltip>
	} else if (type === 'late_deadline') {
		return <Tooltip placement="top" title="Дедлайн просрочен"><SoftIcon /></Tooltip>
	}
};