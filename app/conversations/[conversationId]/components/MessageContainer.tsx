"use client";

import { FullMessageType } from "@/app/types";
import { Conversation, User } from "@prisma/client";
import Header from "./Header";
import Body from "./Body";
import Form from "./Form";
import { useState } from "react";

interface MessageContainerProps {
  initialMessages: FullMessageType[];
  conversation: Conversation & {
    users: User[];
  };
}

const MessageContainer: React.FC<MessageContainerProps> = ({
  initialMessages,
  conversation,
}) => {
  const [messages, setMessages] = useState(initialMessages);
  return (
    <>
      <Header conversation={conversation} />
      <Body initialMessages={messages} setMessages={setMessages} />
      <Form />
    </>
  );
};

export default MessageContainer;
