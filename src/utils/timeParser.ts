const lessThanTenParser = (number: number): string => {
  return number < 10 ? `0${number}` : number.toString();
};

export const timeParser = (dateStart: string, dateEnd: string): string => {
  const dateStartObject = new Date(dateStart);
  const dateEndObject = new Date(dateEnd);

  return `${lessThanTenParser(dateStartObject.getHours())}:${lessThanTenParser(dateStartObject.getMinutes())} - ${lessThanTenParser(dateEndObject.getHours())}:${lessThanTenParser(dateEndObject.getMinutes())}`;
};
