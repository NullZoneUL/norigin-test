import { EPGDataInterface } from "src/components/home/epg/epgInterface";

const lessThanTenParser = (number: number): string => {
  return number < 10 ? `0${number}` : number.toString();
};

export const parseEPG = (epg: EPGDataInterface) => {
  epg?.channels?.forEach((channel) => {
    channel.schedules?.forEach((scheduleItem) => {
      const dateStartObject: Date = new Date(scheduleItem.start);
      const dateEndObject: Date = new Date(scheduleItem.end);
      scheduleItem.minutes =
        (dateEndObject.getTime() - dateStartObject.getTime()) / 1000 / 60;
      scheduleItem.parsedSchedule = `${lessThanTenParser(dateStartObject.getHours())}:${lessThanTenParser(dateStartObject.getMinutes())} - ${lessThanTenParser(dateEndObject.getHours())}:${lessThanTenParser(dateEndObject.getMinutes())}`;
    });
  });
  return epg;
};
