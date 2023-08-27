import { Conversation, Message, User } from "@prisma/client";
import { type } from "os";

export type FullMessageType = {
  sender: User;
  seen: User[];
} & Message;

export type FullConversationType = {
  users: User[];
  messages: FullMessageType[];
} & Conversation;
