import { Client } from "bedrock-protocol";

class Toast {
  private message: string;
  private title: string;

  setTitle(title: string): Toast {
    this.title = title;

    return this;
  }

  setMessage(message: string): Toast {
    this.message = message;

    return this;
  }

  execute(client: Client): Toast {
    const { message, title } = this;

    if (message && title)
      client.queue("toast_request", {
        title,
        message,
      });

    return this;
  }
}

export default Toast;
