import { lessThanTenParser } from "./checkLessThanTen";

/**
 * Return the schedule program in 'hh:mm - hh:mm' format
 */
export const getParsedSchedule = (dateStart: Date, dateEnd: Date) => {
  return `${lessThanTenParser(dateStart.getHours())}:${lessThanTenParser(dateStart.getMinutes())} - ${lessThanTenParser(dateEnd.getHours())}:${lessThanTenParser(dateEnd.getMinutes())}`;
};
