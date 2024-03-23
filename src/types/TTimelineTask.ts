import { TUser } from "./TUser";
import { TWarning } from "./TWarning";

export type TTimelineTask = {
	id: number;
	title: string;
	status: string;
	responsible: TUser;

	start_date: Date;
	finish_date: Date;
	deadline: Date;
	warnings: TWarning[];
};