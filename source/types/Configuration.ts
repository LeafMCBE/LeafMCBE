interface Configuration {
  Server: {
    host: string;
    port: number;
    motd: string;
    version: string;
    max_players: number;
  };

  LeafMCBE: {
    Terminal: {
      debug: boolean;
      showDate: boolean;
      showPrompt: boolean;
    };
  };
}

export default Configuration
