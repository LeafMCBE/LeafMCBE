interface Configuration {
  Server: {
    host: string;
    port: number;
    motd: string;
    version: string;
    max_players: number;
  };

  LeafMCBE: {
    Logger: {
      debug: boolean;
      showDate: boolean;
    };
  };
}

export default Configuration;
