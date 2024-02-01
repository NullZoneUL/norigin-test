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
  onTimeUpdated: (newPosition: number) => void;
}) => {
  const [barPosition, setBarPosition] = useState(-1);
  const timeRef = useRef(date.getHours() * 60 + date.getMinutes());

  /**
   * Update the current time as well as the bar position
   */
  const updateTimeMarker = useCallback(
    (doNotUpdateTime?: boolean) => {
      const newPosition = (timeRef.current / 60) * pxByHour;
      setBarPosition(newPosition);
      onTimeUpdated(newPosition);
      if (!doNotUpdateTime) {
        timeRef.current += UPDATE_TIME / 60;
      }
    },
    [pxByHour],
  );

  useEffect(() => {
    const updateTimeMarkerInterval = setInterval(
      updateTimeMarker,
      UPDATE_TIME * 1000,
    );

    return () => {
      clearInterval(updateTimeMarkerInterval);
    };
  }, []);

  /**
   * If the pixels by hour change, the time marker position is updated
   */
  useEffect(() => {
    updateTimeMarker(true);
  }, [pxByHour]);

  if (barPosition === -1) {
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
