import React, { useEffect, useState } from "react";
import EPGTimeLineBar from "./timeLine";
import EPGChannelList from "./channelList";
import EPGContent from "./epgContent";
import { epgData } from "./getEpg";
import { parseEPG } from "src/utils/epgParser";
import { EPGDataInterface } from "./epgInterface";
import "./_style.scss";

const EPGContainer = () => {
  const [epg, setEpg] = useState<EPGDataInterface>();
  const [pxByHour, setPxByHour] = useState(0);

  useEffect(() => {
    let minHeightTimeout: any;

    const getEpg = async () => {
      const epg = await epgData.getEpg();
      setEpg(parseEPG(epg));
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

  if (!epg || pxByHour == 0) {
    return <></>;
  }
  console.log(epg);
  return (
    <div className="epg-container">
      <EPGTimeLineBar pxByHour={pxByHour} />
      <EPGChannelList channelList={epg.channels} />
      <EPGContent epgData={epg} pxByHour={pxByHour} />
    </div>
  );
};

export default EPGContainer;
