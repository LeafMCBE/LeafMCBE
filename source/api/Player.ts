class Player {
  public readonly username: string;
  public readonly ip: string;
  public readonly client: any;

  constructor(client: any) {
    this.username = client.getUserData().displayName;
    this.ip = client.connection.address;

    this.client = client;
  }

  send(text: string) {
    this.client.queue("text", {
      type: "chat",
      needs_transation: false,
      source_name: "",
      xuid: "",
      platform_chat_id: "",
      message: text,
    });
  }

  kick(reason: string) {
    this.client.disconnect(reason || "Kicked by CONSOLE");
  }
}

export default Player;
