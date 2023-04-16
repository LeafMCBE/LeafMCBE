if (
  typeof process !== "undefined" &&
  parseInt(process.versions.node.split(".")[0]) < 14
) {
  console.error("Your node version is currently", process.versions.node);
  console.error(
    "Please update it to a version >= 14.x.x from https://nodejs.org/"
  );
  process.exit(1);
}

import Server from "./source/Server";

export default new Server();
