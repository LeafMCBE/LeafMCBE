import { Client } from "bedrock-protocol";

class Toast {
  private message: string;
  private title: string;

  setTitle(title: string) {
    this.title = title;
  }

  setMessage(message: string) {
    this.message = message;
  }

  execute(client: Client) {
    const message = this.message;
    const title = this.title;

    if (message && title)
      client.queue("toast_request", {
        title,
        message,
      });
  }
}

export default Toast;
