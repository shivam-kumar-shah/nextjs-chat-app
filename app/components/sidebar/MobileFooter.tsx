"use client";
import React from "react";
import useRoutes from "@/app/hooks/useRoutes";
import useConversation from "@/app/hooks/useConversation";
import MobileItem from "./MobileItem";

interface MobileFooterProps {}

const MobileFooter = (props: MobileFooterProps) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div
      className="fixed 
        justify-between
        w-full
        bottom-0
        z-40
        flex
        items-center
        bg-white
        border-t-[1px]
        lg:hidden
        "
    >
      {routes.map((item, index) => {
        return (
          <MobileItem
            key={item.label}
            href={item.href}
            active={item.active}
            icon={item.icon}
            onClick={item.onClick}
          />
        );
      })}
    </div>
  );
};

export default MobileFooter;
