"use client";

import useConversation from "@/app/hooks/useConversation";
import { FullMessageType, TempMsg } from "@/app/types";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import MessageBox from "./MessageBox";
import axios from "axios";
import { pusherClient } from "@/app/libs/pusher";
import {
  MESSAGE_UPDATE_EVENT,
  NEW_MESSAGE_EVENT,
} from "@/app/constants/pusherConstants";
import { find, remove } from "lodash";
import TemporaryMessageBox from "./TemporaryMessageBox";

interface BodyProps {
  messages: FullMessageType[];
  pendingMsgs: TempMsg[];
  setMessages: Dispatch<SetStateAction<FullMessageType[]>>;
}

const Body: React.FC<BodyProps> = ({ messages, pendingMsgs, setMessages }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  useEffect(() => {
    const messageHandler = (message: FullMessageType) => {
      axios.post(`/api/conversations/${conversationId}/seen`);
      setMessages((current: FullMessageType[]) => {
        // find conditional is used to prevent addition of same message twice
        if (find(current, { id: message.id })) {
          return current;
        }
        return [...current, message];

        /**
         * Previous approach
         */

        // setOptimistic((prev: TempMsg[]) => {
        //   return prev.map((el) => {
        //     if (el.id === message.id) {
        //       return el;
        //     }
        //   });
        // });
      });
      bottomRef?.current?.scrollIntoView();
    };

    const updateMessageHandler = (newMessage: FullMessageType) => {
      setMessages((current: any) =>
        current.map((currentMessage: any) => {
          if (currentMessage.id === newMessage.id) {
            return newMessage;
          }
          return currentMessage;
        })
      );
    };

    pusherClient.subscribe(conversationId);
    pusherClient.bind(NEW_MESSAGE_EVENT, messageHandler);
    pusherClient.bind(MESSAGE_UPDATE_EVENT, updateMessageHandler);

    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind(NEW_MESSAGE_EVENT, messageHandler);
      pusherClient.unbind(MESSAGE_UPDATE_EVENT, updateMessageHandler);
    };
  }, [conversationId, setMessages]);

  const serverMessages = messages.map((message, index) => (
    <MessageBox
      key={message.id}
      isLast={index == messages.length - 1}
      data={message}
    />
  ));

  const tempMessages = pendingMsgs.map((message, index) => (
    <TemporaryMessageBox
      key={message.senderTimestamp}
      data={message}
      isLast={index == messages.length - 1}
    />
  ));

  return (
    <div className="flex-1 overflow-y-auto">
      {serverMessages}
      {tempMessages}
      {/**
       * Previous Approach
       */}
      {/* {messages.map((message, i) => {
        console.log("message", message);
        return message?.pending ?? false ? (
          <TemporaryMessageBox key={message.id} data={message} isLast={true} />
        ) : (
          <MessageBox
            key={message.id}
            isLast={i === messages.length - 1}
            data={message as FullMessageType}
          />
        );
      })} */}

      <div ref={bottomRef} />
    </div>
  );
};

export default Body;
