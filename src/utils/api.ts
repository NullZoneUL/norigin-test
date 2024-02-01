import axios from "axios";
import buildStrings from "src/utils/buildStrings";

class ApiRequest {
  URL = "";

  constructor(url: string) {
    this.URL = url;
  }

  get = async (section: string, params?: { [key in string]: string }) => {
    let formattedParams = "";
    try {
      params &&
        Object.keys(params).forEach((key: string) => {
          formattedParams += formattedParams === "" ? "?" : "&";
          formattedParams += `${key}=${params[key]}`;
        });
    } catch (error) {
      console.error(error);
    }

    const response = await axios.get(`${this.URL}${section}${formattedParams}`);
    return response?.data;
  };
}

const request = new ApiRequest(buildStrings.BACK_URL);

//Available urls
const urls = {
  epg: "epg",
  program: "program",
};

export { ApiRequest, request, urls };
