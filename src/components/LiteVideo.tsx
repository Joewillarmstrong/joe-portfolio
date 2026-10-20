"use client";

import { useState } from "react";
import { asset } from "@/lib";

type Props = {
  videoId: string;
  aria: string;
  title: string;
  poster?: string;
  posterZoom?: boolean;
  short?: boolean;
  tone: "ink" | "green";
};

export default function LiteVideo({ videoId, aria, title, poster, posterZoom, short, tone }: Props) {
  const [playing, setPlaying] = useState(false);
  const light = tone === "green";

  if (short) {
    return (
      <div className="mx-auto w-full max-w-[250px] desk:mx-0">
        <div className="rounded-[36px] bg-ink p-[9px] shadow-[0_0_0_1px_#111214]">
          <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[28px] bg-black">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&playsinline=1`}
              title={title}
              loading="lazy"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <span className="pointer-events-none absolute left-1/2 top-2 h-[14px] w-[64px] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="w-full">
        <div className="relative aspect-video w-full bg-ink">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={aria}
      className={`group relative block aspect-video w-full overflow-hidden ${light ? "bg-green" : "bg-ink"}`}
    >
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={asset(poster)} alt="" className={`h-full w-full object-cover ${posterZoom ? "scale-[1.28]" : ""}`} />
      )}
      <span
        className={`absolute bottom-4 left-4 flex h-[52px] w-[52px] items-center justify-center transition-transform duration-300 group-hover:scale-110 ${light ? "bg-paper" : "bg-green"}`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill={light ? "#1F4A33" : "#F6F6F4"} aria-hidden="true">
          <path d="M8 5.5v13l10.5-6.5L8 5.5z" />
        </svg>
      </span>
    </button>
  );
}
