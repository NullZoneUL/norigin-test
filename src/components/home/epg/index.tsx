import React, { useCallback, useEffect, useRef, useState } from "react";
import EPGTimeLineBar from "./timeLine";
import EPGChannelList from "./channelList";
import EPGContent from "./epgContent";
import EPGTimeMarker from "./timeMarker";
import { epgData } from "./getEpg";
import { parseEPG } from "src/utils/epgParser";
import { EPGDataInterface } from "./epgInterface";
import literals from "@assets/literals/eng.json";
import "./_style.scss";

const EPGContainer = ({ date }: { date: Date }) => {
  const [epg, setEpg] = useState<EPGDataInterface>();
  const [requestError, setRequestError] = useState(false);
  const [pxByHour, setPxByHour] = useState(0);
  const scrollPosition = useRef(0);
  const containerRef = useRef<HTMLDivElement>();
  const channelsRef = useRef<HTMLDivElement>();
  const scrolled = useRef(false);

  const geScrollPosition = (newPosition: number) => {
    scrollPosition.current =
      newPosition - (window.innerWidth - channelsRef.current.clientWidth) / 2;

    if (!scrolled.current) {
      resetContainerScroll();
      scrolled.current = true;
    }
  };

  const resetContainerScroll = useCallback(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollLeft = scrollPosition.current;
  }, []);

  useEffect(() => {
    setRequestError(false);
    let minHeightTimeout: any;

    const getEpg = async () => {
      try {
        const epg = await epgData.getEpg();
        setEpg(parseEPG(epg));
      } catch {
        setRequestError(true);
      }
    };

    const resizeListener = (): void => {
      clearTimeout(minHeightTimeout);
      minHeightTimeout = setTimeout(() => {
        const width = window.innerWidth;
        setPxByHour(width <= 480 ? 250 : width <= 900 ? 400 : 600);
      }, 500);
    };

    getEpg();
    resizeListener();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  if (requestError) {
    return <div className="request-error">{literals.epgError}</div>;
  }

  if (!epg || pxByHour == 0) {
    return <></>;
  }

  return (
    <>
      <EPGChannelList channelList={epg.channels} ref_={channelsRef} />
      <div className="epg-container" ref={containerRef}>
        <EPGTimeLineBar pxByHour={pxByHour} />
        <EPGContent epgData={epg} pxByHour={pxByHour} />
        <EPGTimeMarker
          date={date}
          pxByHour={pxByHour}
          onTimeUpdated={geScrollPosition}
        />
        <button onClick={resetContainerScroll} className="epg-reset-scroll-btn">
          {literals.now}
        </button>
      </div>
    </>
  );
};

export default EPGContainer;
