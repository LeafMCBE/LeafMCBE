import server from "../../../start";
import Logger from "../../console/Logger";

const API = () => {
  return {
    getServer: () => server,
    getLogger: () =>
      new Logger({
        name: "Command",
        debug: server.config.LeafMCBE.Logger.debug,
        showDate: server.config.LeafMCBE.Logger.showDate,
      }),
  };
};

export default API;
