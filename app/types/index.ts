import { Conversation, Message, User } from "@prisma/client";
import { type } from "os";

export type FullMessageType = Message & {
  sender: User;
  seen: User[];
  senderTimestamp: string;
};

export type TempMsg = {
  body: string;
  senderTimestamp: string;
};

export type FullConversationType = Conversation & {
  users: User[];
  messages: FullMessageType[];
};
