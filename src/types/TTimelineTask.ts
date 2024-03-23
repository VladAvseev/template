import { TUser } from "./TUser";

export type TTimelineTask = {
	id: number;
	title: string;
	deadline: Date; // dd.mm.yyyy
	delay_deadline: Date | null; // dd.mm.yyyy
	estimated_start_date: Date; // dd.mm.yyyy
	responsible: TUser;
};