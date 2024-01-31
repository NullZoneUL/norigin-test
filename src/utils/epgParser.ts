import { getParsedSchedule } from "./parsedSchedule";
import { EPGDataInterface } from "src/components/home/epg/epgInterface";

export const parseEPG = (epg: EPGDataInterface) => {
  epg?.channels?.forEach((channel) => {
    channel.schedules?.forEach((scheduleItem) => {
      const dateStartObject: Date = new Date(scheduleItem.start);
      const dateEndObject: Date = new Date(scheduleItem.end);
      scheduleItem.minutes =
        (dateEndObject.getTime() - dateStartObject.getTime()) / 1000 / 60;
      scheduleItem.parsedSchedule = getParsedSchedule(
        dateStartObject,
        dateEndObject,
      );
    });
  });
  return epg;
};
