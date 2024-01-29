import React, { useCallback, useEffect, useRef, useState } from "react";
import "./_style.scss";

const UPDATE_TIME = 60; //Time in seconds

const EPGTimeMarker = ({
  date,
  pxByHour,
  onTimeUpdated,
}: {
  date: Date;
  pxByHour: number;
  onTimeUpdated: Function;
}) => {
  const [barPosition, setBarPosition] = useState(0);
  const timeRef = useRef(date.getHours() * 60 + date.getMinutes());

  const updateTimeMarker = useCallback(() => {
    const newPosition = (timeRef.current / 60) * pxByHour;
    setBarPosition(newPosition);
    onTimeUpdated(newPosition);
    timeRef.current += UPDATE_TIME / 60;
  }, [pxByHour, onTimeUpdated]);

  useEffect(() => {
    const updateTimeMarkerInterval = setInterval(
      updateTimeMarker,
      UPDATE_TIME * 1000,
    );
    updateTimeMarker();
    return () => {
      clearInterval(updateTimeMarkerInterval);
    };
  }, []);

  useEffect(() => {
    updateTimeMarker();
  }, [pxByHour]);

  if (barPosition === 0) {
    return <></>;
  }

  return (
    <div className="epg-time-marker-container epg-channel-separator">
      <div
        className="epg-time-marker-time-bar epg-time-line-container-height"
        style={{ transform: `translateX(${barPosition}px)` }}
      ></div>
      <div
        className="epg-time-marker-content"
        style={{ transform: `translateX(${barPosition}px)` }}
      ></div>
    </div>
  );
};

export default EPGTimeMarker;
