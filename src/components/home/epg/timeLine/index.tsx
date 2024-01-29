import React from "react";
import { EPGTimeLineBarItem } from "./item";
import { lessThanTenParser } from "src/utils/checkLessThanTen";
import "./_style.scss";

const EPGTimeLineBar = ({ pxByHour }: { pxByHour: number }) => {
  return (
    <div className="epg-time-line-container epg-time-line-container-height">
      {[...Array(24)].map((e, index) => (
        <EPGTimeLineBarItem
          pxByHour={pxByHour}
          time={`${lessThanTenParser(index)}:00`}
          key={`EPG_SCHEDULE_ITEM_${index}`}
        />
      ))}
    </div>
  );
};

export default EPGTimeLineBar;
