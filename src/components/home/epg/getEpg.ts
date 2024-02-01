import { request, urls } from "src/utils/api";
import { EPGDataInterface } from "./epgInterface";

/**
 * EPG management class
 */
class EPGData {
  lastEpgUpdate: Date;
  epgData: EPGDataInterface;

  getEpg = async () => {
    const actualDate = new Date();
    if (!this.lastEpgUpdate) {
      this.lastEpgUpdate = actualDate;
    }
    if (actualDate.getDate() === this.lastEpgUpdate.getDate() && this.epgData) {
      return this.epgData;
    }

    const epgData = await request.get(urls.epg);
    this.epgData = epgData;
    return epgData;
  };
}

const epgData = new EPGData();

export { epgData };
