export function datesDiference(endDate: Date, startDate: Date) {
	return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
}

export function dateMinusOneDay(date: Date) {
	return new Date(Math.ceil(date.getTime() - (1000 * 60 * 60 * 24)));
}

export function datePlusOneDay(date: Date) {
	return new Date(Math.ceil(date.getTime() + (1000 * 60 * 60 * 24)));
}