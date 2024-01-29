import React from "react";
import { timeParser } from "src/utils/timeParser";
import { EPGDataInterface } from "../epgInterface";
import "./_style.scss";

const EPGContent = ({ epgData }: { epgData: EPGDataInterface }) => {
  if (epgData.channels?.length === 0) {
    return <></>;
  }

  return (
    <div className="epg-content-container">
      {epgData.channels.map((channel) => (
        <div
          className="epg-content-channel-line epg-left-bar-item-height"
          key={`EPG_CONTENT_CHANNEL_${channel.id}`}
        >
          {channel.schedules.length > 0 &&
            channel.schedules.map((scheduleItem, index) => (
              <div
                className="epg-schedule-item"
                key={`EPG_CONTENT_SCHEDULE_ITEM_${scheduleItem.id}_${index}`}
              >
                <div className="epg-schedule-item-title">
                  {scheduleItem.title}
                </div>
                <div className="epg-schedule-item-date">
                  {timeParser(scheduleItem.start, scheduleItem.end)}
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default EPGContent;
