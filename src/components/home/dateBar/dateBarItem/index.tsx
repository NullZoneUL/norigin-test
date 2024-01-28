import React from "react";
import { DateBarItemInterface } from "./interface";
import "./_style.scss";

const DateBarItem = (props: DateBarItemInterface) => {
  const { dayName, date, selected } = props;

  return (
    <div
      className={`date-bar-item ${selected ? "date-bar-item-selected" : ""}`}
    >
      <div className="date-bar-item-day-name">{dayName}</div>
      <div className="date-bar-item-date">{date}</div>
    </div>
  );
};

export default DateBarItem;
