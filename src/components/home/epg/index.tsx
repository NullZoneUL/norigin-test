import React, { useEffect, useState } from "react";
import EPGTimeLineBar from "./timeLine";
import EPGChannelList from "./channelList";
import { epgData } from "./getEpg";
import { EPGDataInterface } from "./epgInterface";
import "./_style.scss";

const EPGContainer = () => {
  const [epg, setEpg] = useState<EPGDataInterface>();

  useEffect(() => {
    const getEpg = async () => {
      const epg = await epgData.getEpg();
      setEpg(epg);
    };

    getEpg();
  }, []);

  if (!epg) {
    return <></>;
  }
  console.log(epg);
  return (
    <div className="epg-container">
      <EPGTimeLineBar />
      <EPGChannelList channelList={epg.channels} />
    </div>
  );
};

export default EPGContainer;
