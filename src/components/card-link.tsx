import { CopyToClipboard } from "@/components/copy-to-clipboard";
import { Links } from "@/constants";
import React from "react";

export default function CardLink({ title, url, icon }: Links) {
  return (
    <div className="group relative flex items-center justify-between w-full border shadow rounded-full hover:scale-105 transition-all ease-in-out duration-300 dark:bg-black/90 bg-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-800 mb-4 max-w-lg cursor-pointer">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center w-full p-2 rounded-full"
      >
        <div className="flex w-full items-center relative">
          {/* {icon && <div>{React.createElement(icon)}</div>}{" "} */}

          <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center">
            {icon && icon}
          </div>
          {/* Render icon as JSX */}

          <h2 className="flex justify-center font-medium font-monoo w-full dark:text-neutral-100 text-neutral-800">
            {title}
          </h2>
        </div>
      </a>
      <div className="absolute group-hover:flex right-3 top-1/2 -translate-y-1/2 items-center hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <CopyToClipboard url={url} />
      </div>
    </div>
  );
}
