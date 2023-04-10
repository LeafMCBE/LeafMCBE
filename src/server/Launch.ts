import Server from "../Server.js";
import chalk from "chalk";

const launch = (srv: Server) => {
  console.log(` 
 _                 __ __  __  _____ ____  ______ 
| |               / _|  \\/  |/ ____|  _ \\|  ____|
| |     ___  __ _| |_| \\  / | |    | |_) | |__   
| |    / _ \\/ _\` |  _| |\\/| | |    |  _ <|  __|  
| |___|  __/ (_| | | | |  | | |____| |_) | |____ 
|______\\___|\\__,_|_| |_|  |_|\\_____|____/|______|
`);
  srv.loggers.srv.info(
    `Starting LeafMCBE on Minecraft Bedrock ${chalk.bold(
      srv.config.Server.version
    )}`
  );
};

export default launch;
