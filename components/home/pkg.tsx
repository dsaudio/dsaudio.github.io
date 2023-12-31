"use client";
import React, { useState } from "react";
import Link from "next/link";
import Popover from "@/components/shared/popover";
// import { useTranslation } from "@/i18n/client";
import { LngProps } from "@/i18next-lng";
import { Asset } from "@/types/release";

export default function Pkg(
  props: LngProps & {
    assets: Asset[];
    disabled: boolean;
    children: React.ReactNode;
  },
) {
  // const { t } = useTranslation(props.lng, "header");
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <Popover
      content={
        <div className="w-full min-w-[14rem] rounded-md bg-white p-2 dark:bg-black">
          {props.assets.map((asset) => {
            return (
              <Link
                key={asset.id}
                href={asset.browser_download_url || ""}
                className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <p className="text-sm">{asset.name}</p>
              </Link>
            );
          })}
        </div>
      }
      align="end"
      openPopover={openPopover}
      setOpenPopover={setOpenPopover}
    >
      <button
        onClick={() => setOpenPopover(!openPopover)}
        className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:enabled:border-gray-800 disabled:cursor-not-allowed dark:bg-black dark:text-white/80 max-md:mx-10"
        disabled={props.disabled}
        rel="noopener noreferrer"
      >
        {props.children}
      </button>
    </Popover>
  );
}
