import React, { useEffect, useState } from "react";
import { epgData } from "./getEpg";
import { EPGDataInterface } from "./epgInterface";

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

  return <div className="epg-container"></div>;
};

export default EPGContainer;
