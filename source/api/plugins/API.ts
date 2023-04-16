import server from "../../../start";
import Logger from "../../console/Logger";
import { PluginOptions } from "./Base";

const API = (options: PluginOptions) => {
  return {
    getServer: () => server,
    getLogger: () =>
      new Logger({
        name: options.name,
        debug: server.config.LeafMCBE.Logger.debug,
        showDate: server.config.LeafMCBE.Logger.showDate,
      }),
  };
};

export default API;
