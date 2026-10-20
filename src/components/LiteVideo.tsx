"use client";

import { useState } from "react";
import { asset } from "@/lib";

type Props = {
  videoId: string;
  aria: string;
  title: string;
  poster?: string;
  short?: boolean;
  tone: "ink" | "green";
};

export default function LiteVideo({ videoId, aria, title, poster, short, tone }: Props) {
  const [playing, setPlaying] = useState(false);
  const light = tone === "green";

  if (playing) {
    return (
      <div className={short ? "mx-auto w-full max-w-[260px] desk:mx-0" : "w-full"}>
        <div className={`relative w-full bg-ink ${short ? "aspect-[9/16]" : "aspect-video"}`}>
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
        <img src={asset(poster)} alt="" className="h-full w-full object-cover opacity-75 grayscale" />
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
