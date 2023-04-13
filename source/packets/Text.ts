import { Client } from "bedrock-protocol";

export enum TextType {
  Raw = "raw",
  Chat = "chat",
  Translation = "translation",
  Popup = "popup",
  JukeboxPopup = "jukebox_popup",
  Tip = "tip",
  System = "system",
  Whisper = "whisper",
  Announcement = "announcement",
  JsonWhisper = "json_whisper",
  Json = "json",
  JsonAnnouncement = "json_announcement",
}

export class Text {
  private message: string;
  private source_name: string;
  private xuid: string;
  private platform_chat_id: any;
  private translation: boolean;
  private type: TextType;
  parameters: string[];

  setMessage(message: string) {
    this.message = message;

    return this;
  }

  setSourceName(name: string) {
    this.source_name = name;

    return this;
  }

  setXuid(xuid: string) {
    this.xuid = xuid;

    return this;
  }

  setPlatformChatId(id: string) {
    this.platform_chat_id = id;
    return this;
  }

  setNeedsTranslation(translation: boolean) {
    this.translation = translation;

    return this;
  }

  setType(type: TextType) {
    this.type = type;

    return this;
  }

  setParameter(...parameter: string[]) {
    this.parameters = parameter;
  }

  execute(client: Client) {
    const required = {
      type: this.type,
      xuid: this.xuid,
      platform_chat_id: this.platform_chat_id,
      needs_translation: this.translation,
      message: this.message,
    };

    if (
      this.type === TextType.Chat ||
      this.type === TextType.Announcement ||
      this.type === TextType.Whisper
    ) {
      client.queue("text", {
        ...required,
        source_name: this.source_name,
      });
    } else if (
      this.type === TextType.Translation ||
      this.type === TextType.Popup ||
      this.type === TextType.JukeboxPopup
    ) {
      client.queue("text", {
        ...required,
        parameters: this.parameters,
      });
    } else {
      client.queue("text", required);
    }
  }
}
