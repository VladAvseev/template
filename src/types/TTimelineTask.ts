import { TTaskStatus } from "./TTaskStatus";
import { TUser } from "./TUser";
import { TWarning } from "./TWarning";

export type TTimelineTask = {
	id: number;
	status: TTaskStatus;
	title: string;
	deadline: Date;
	start_date: Date;
	finish_date: Date;
	responsible: TUser;
	warnings: TWarning[];
};