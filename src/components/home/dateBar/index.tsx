import React, { useEffect, useState } from "react";
import DateBarItem from "./dateBarItem";
import ExtendedImage from "src/elements/image";
import { DateBarItemInterface } from "./dateBarItem/interface";
import { starImage } from "@assets/images/star";
import "./_style.scss";

const DateBar = ({ date }: { date: Date }) => {
  const [dateList, setDateList] = useState<DateBarItemInterface[]>([]);

  useEffect(() => {
    const oneDayOffset = 24 * 60 * 60 * 1000;
    const dayDate = new Date();
    const daysArray: DateBarItemInterface[] = [];

    for (let i = -2; i <= 2; i++) {
      dayDate.setTime(date.getTime() + i * oneDayOffset);
      daysArray.push({
        dayName: dayDate.toLocaleString("en-us", { weekday: "short" }),
        date: `${dayDate.getDate()}.${dayDate.getMonth() + 1}.`,
        selected: i === 0,
      });
    }

    setDateList(daysArray);
  }, [date]);

  return (
    <div className="date-bar">
      <div className="date-bar-star epg-left-bar-width epg-left-bar-item-height">
        <ExtendedImage image={starImage} preload />
      </div>
      <div className="date-bar-list">
        {dateList.length > 0 &&
          dateList.map((date) => (
            <DateBarItem {...date} key={`DATE_BAR_ITEM_${date.date}`} />
          ))}
      </div>
    </div>
  );
};

export default DateBar;
