"use client";
import useConversation from "@/app/hooks/useConversation";
import { TempMsg } from "@/app/types";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";

type Props = {
  setTempMsgs: Dispatch<SetStateAction<TempMsg[]>>;
};

export class APIException extends Error {
  constructor(private data: any, message: string) {
    super(message);
  }
}

const Form = ({ setTempMsgs }: Props) => {
  const { conversationId } = useConversation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setValue("message", "", { shouldValidate: true });
      /**
       * Previous Approach
       */
      // const messageId = genId();
      // console.log("MessageID", messageId);
      // setMessages([
      //   ...messages,
      //   { id: messageId, body: data.message, pending: true },
      // ]);
      const timestamp = Date.now().toString();
      const tempMsg: TempMsg = {
        body: data.message,
        senderTimestamp: timestamp,
      };

      setTempMsgs((prev) => [...prev, tempMsg]);

      const result = await axios.post("/api/messages", {
        ...data,
        conversationId,
      });
      setTempMsgs((prev) =>
        prev.filter((item) => item.senderTimestamp != timestamp)
      );
      if (result.status > 299) throw new APIException(tempMsg, result.data);
    } catch (err: any) {
      console.log("ERROR in messageForm", err);
      if (err instanceof APIException) {
        setTempMsgs((prev) =>
          prev.filter((item) => item.senderTimestamp != err.timestamp)
        );
      }
    }
  };

  const handleUpload = (result: any) => {
    axios.post("/api/messages", {
      image: result?.info?.secure_url,
      conversationId,
    });
  };

  return (
    <div
      className="
        py-4
        px-4
        bg-white
        border-t
        flex
        items-center
        gap-2
        lg:gap-4
        w-full
    "
    >
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset="qfgse9co"
      >
        <HiPhoto size={30} className="text-sky-500" />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="
          rounded-full
          p-2
          bg-sky-500
          cursor-pointer
          hover:bg-sky-600
          transition
        "
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
