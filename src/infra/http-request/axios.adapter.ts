import axios from "axios";
import HttpClient from "./http-client";

export default class AxiosAdapter implements HttpClient {
  private HEADERS = {
    Host: "servicespub.prod.api.aws.grupokabum.com.br",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:84.0) Gecko/20100101 Firefox/84.0",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
    "Accept-Encoding": "gzip, deflate, br",
  };

  async get(url: string): Promise<any> {
    const response = await axios({ method: "GET", url, headers: this.HEADERS });
    return response.data;
  }
}
