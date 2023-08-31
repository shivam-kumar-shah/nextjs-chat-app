import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  cluster: "ap2",
  secret: process.env.PUSHER_SECRET!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  useTLS: true,
});

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    cluster: "ap2",
  }
);
