"use client";
import { FullMessageType, TempMsg } from "@/app/types";
import { Conversation, User } from "@prisma/client";
import Header from "./Header";
import Body from "./Body";
import Form from "./Form";
import { useState, experimental_useOptimistic as useOptimistic } from "react";

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
  const [serverMessages, setServerMessages] = useState(initialMessages);
  const [tempMsgs, setTempMsgs] = useState<TempMsg[]>([]);

  return (
    <>
      <Header conversation={conversation} />
      <Body
        messages={serverMessages}
        setMessages={setServerMessages}
        pendingMsgs={tempMsgs}
      />
      <Form setTempMsgs={setTempMsgs} />
    </>
  );
};

export default MessageContainer;
