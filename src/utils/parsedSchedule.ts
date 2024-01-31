import { lessThanTenParser } from "./checkLessThanTen";

export const getParsedSchedule = (dateStart: Date, dateEnd: Date) => {
  return `${lessThanTenParser(dateStart.getHours())}:${lessThanTenParser(dateStart.getMinutes())} - ${lessThanTenParser(dateEnd.getHours())}:${lessThanTenParser(dateEnd.getMinutes())}`;
};
