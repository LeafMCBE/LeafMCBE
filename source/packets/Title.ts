import { Client } from "bedrock-protocol";

export enum TitleType {
  Clear = "clear",
  Reset = "reset",
  SetTitle = "set_title",
  SetSubtitle = "set_subtitle",
  ActionBarMessage = "action_bar_message",
  SetDurations = "set_durations",
  SetTitleObject = "set_title_json",
  SetSubtitleObject = "set_subtitle_object",
  ActionBarMessageObject = "action_bar_message_object",
}

export class Title {
  private type: TitleType;
  private text: string;
  private fadeIn: number;
  private fadeOut: number;
  private stayIn: number;
  private xuid: string;
  private platform_online_id: string;

  setType(type: TitleType) {
    this.type = type;
  }

  setText(text: string) {
    this.text = text;
  }

  setFadeIn(fadeIn: number) {
    this.fadeIn = fadeIn;
  }

  setFadeOut(fadeOut: number) {
    this.fadeOut = fadeOut;
  }

  setStayIn(stayIn: number) {
    this.stayIn = stayIn;
  }

  setXuid(xuid: string) {
    this.xuid = xuid;
  }

  setPlatformOnlineId(platform_online_id: string) {
    this.platform_online_id = platform_online_id;
  }

  execute(client: Client) {
    const { type, text, fadeIn, fadeOut, stayIn, platform_online_id, xuid } =
      this;
    if (type && text && fadeIn && fadeOut && stayIn)
      client.queue("set_title", {
        type,
        text,
        fadeIn,
        fadeOut,
        stayIn,
        platform_online_id,
        xuid,
      });
  }
}
