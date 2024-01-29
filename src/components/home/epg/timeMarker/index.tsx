import React, { useCallback, useEffect, useRef, useState } from "react";
import "./_style.scss";

const UPDATE_TIME = 120; //Time in seconds

const EPGTimeMarker = ({
  date,
  pxByHour,
}: {
  date: Date;
  pxByHour: number;
}) => {
  const [barPosition, setBarPosition] = useState(0);
  const timeRef = useRef(date.getHours() * 60 + date.getMinutes());
  const updateTimeMarker = useCallback(() => {
    setBarPosition((timeRef.current / 60) * pxByHour);
    timeRef.current += UPDATE_TIME / 60;
  }, [pxByHour]);

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
