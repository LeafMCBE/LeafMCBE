import server from "../../../start";
import Logger from "../../console/Logger";
import { PluginOptions } from "./Base";

const API = (options: PluginOptions) => {
  return {
    getServer: () => server,
    getLogger: () =>
      new Logger({
        name: options.name,
        debug: server.config.LeafMCBE.Terminal.debug,
        showDate: server.config.LeafMCBE.Terminal.showDate,
      }),
  };
};

export default API;
