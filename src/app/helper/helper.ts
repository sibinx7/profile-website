/**
 * @method
 * @summary Calculate year difference between 2 date
 * @description Calculate year difference between 2 date
 * @param date date Date
 */
export const yearDiffFromNow = (date: Date): number => {
	const currentDate: Date = new Date();
	const inputDate: Date = new Date(date);
	const diffTime: number = Math.abs(currentDate.getTime() - inputDate.getTime());
	const diffYears: number = Math.ceil( (diffTime) / (1000 * 60 * 60 * 24 * 365));
	return Math.ceil(diffYears);
};

