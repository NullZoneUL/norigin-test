import React from "react";

export const EPGTimeLineBarItem = ({
  pxByHour,
  time,
}: {
  pxByHour: number;
  time: string;
}) => {
  return (
    <div
      className="epg-time-line-item-container"
      style={{ width: `${pxByHour}px` }}
    >
      <div className="epg-time-line-item-min-content">
        <span className="epg-time-line-item">{time}</span>
      </div>
    </div>
  );
};
