"use client";
import Avatar from "@/app/components/Avatar";
import { FullMessageType, TempMsg } from "@/app/types";
import clsx from "clsx";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

const LoadingAvatar: React.FC<{ source: string }> = ({ source }) => {
  return (
    <div className="relative">
      <div
        className="
        relative
        inline-block
        rounded-full
        overflow-hidden
        h-9
        w-9
        md:h-11
        md:w-11  
      "
      >
        <Image alt="Avatar" src={source} fill />
      </div>

      <span
        className="
        absolute
        block
        rounded-full
        bg-green-500
        ring-2
        ring-white
        top-0
        right-0
        h-2
        w-2
        md:h-3
        md:w-3
      "
      />
    </div>
  );
};

interface TemporaryMessageBoxProps {
  data: TempMsg;
  isLast: boolean;
}

const TemporaryMessageBox: React.FC<TemporaryMessageBoxProps> = ({
  data,
  isLast,
}) => {
  const loadingAvatar = "/images/loading_avatar.png";

  const container = clsx("flex gap-3 p-4", "justify-end");

  const avatar = clsx("order-2");

  const body = clsx("flex flex-col gap-2", "items-end");

  const message = clsx(
    "text-sm w-fit overflow-hidden",
    "bg-sky-500 text-white",
    "rounded-full py-2 px-3"
  );

  return (
    <div className={container}>
      <div className={avatar}>
        <LoadingAvatar source={loadingAvatar} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-xs text-gray-400">{format(new Date(), "p")}</div>
        </div>
        <div className={message}>
          <div>{data.body}</div>
        </div>
      </div>
    </div>
  );
};

export default TemporaryMessageBox;
