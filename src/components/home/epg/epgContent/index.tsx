import React from "react";
import { getEpgItemWidth } from "./getWidth";
import { EPGDataInterface } from "../epgInterface";
import "./_style.scss";

const EPGContent = ({
  epgData,
  pxByHour,
}: {
  epgData: EPGDataInterface;
  pxByHour: number;
}) => {
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
                style={{
                  width: getEpgItemWidth(scheduleItem.minutes, pxByHour),
                }}
                key={`EPG_CONTENT_SCHEDULE_ITEM_${scheduleItem.id}_${index}`}
              >
                <div className="epg-schedule-item-title">
                  {scheduleItem.title}
                </div>
                <div className="epg-schedule-item-date">
                  {scheduleItem.parsedSchedule}
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default EPGContent;
