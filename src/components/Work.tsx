"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { campaigns } from "@/campaigns";
import { asset } from "@/lib";
import LiteVideo from "./LiteVideo";

export default function Work() {
  const [active, setActive] = useState(campaigns[0].id);
  const c = campaigns.find((x) => x.id === active)!;

  return (
    <section id="work" className="mx-auto flex max-w-[1360px] scroll-mt-4 flex-col gap-8 px-5 pb-20 desk:px-10 desk:pb-28">
      <div className="flex items-baseline justify-between border-t border-ink pt-4">
        <h2 className="text-[28px] font-medium tracking-[-0.02em]">Selected work</h2>
        <span className="font-mono text-xs">Four campaigns</span>
      </div>

      <div role="group" aria-label="Choose a campaign" className="grid grid-cols-2 gap-4 desk:grid-cols-4 desk:gap-6">
        {campaigns.map((s) => {
          const on = s.id === active;
          return (
            <button
              key={s.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(s.id)}
              className="group flex flex-col gap-3 text-left transition-transform duration-[400ms] ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 focus-visible:outline-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(s.img)}
                alt={s.alt}
                width={600}
                height={600}
                style={{ objectPosition: s.pos }}
                className={`aspect-square w-full object-cover outline outline-[3px] outline-offset-4 transition-[filter] duration-[400ms] group-focus-visible:outline-green ${
                  on ? "outline-green" : "outline-transparent grayscale-[0.85]"
                }`}
              />
              <span className="flex items-baseline justify-between gap-2">
                <span className="text-[15px] font-medium desk:text-[17px]">{s.title}</span>
                <span className={`font-mono text-[11px] ${on ? "text-green" : "text-transparent"}`} aria-hidden="true">
                  Viewing
                </span>
              </span>
              <span className="font-mono text-xs text-muted">{s.sub}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={c.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-live="polite"
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 border-t border-ink pt-8 desk:mt-10 desk:grid-cols-12"
        >
          <div className="flex flex-col gap-6 desk:col-span-3">
            {c.stats.map((st) => (
              <div key={st.big} className="flex flex-col gap-1">
                <span className="text-[40px] font-medium leading-none tracking-[-0.04em] text-green">{st.big}</span>
                <span className="font-mono text-xs">{st.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[18px] desk:col-span-5 desk:col-start-4">
            <p className="font-mono text-xs text-muted">{c.meta}</p>
            <h3 className="text-[30px] font-medium leading-[1.1] tracking-[-0.03em] desk:text-4xl">{c.heading}</h3>
            {c.paras.map((p) => (
              <p key={p.slice(0, 24)} className="text-[17px] leading-[1.65]">{p}</p>
            ))}
          </div>

          <div className="flex flex-col gap-3.5 desk:col-span-4 desk:col-start-9">
            {c.videos.map((v) => (
              <div key={`${c.id}-${v.id}`} className="flex flex-col gap-3.5">
                <LiteVideo
                  videoId={v.id}
                  aria={v.aria}
                  title={v.label.replace("Watch: ", "")}
                  poster={v.poster}
                  posterZoom={v.posterZoom}
                  short={v.short}
                  tone={v.tone}
                />
                <span className="font-mono text-xs">{v.label}</span>
              </div>
            ))}
            <ul className="mt-3 flex flex-col gap-1.5 font-mono text-xs text-body">
              {c.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          {c.gallery && (
            <div className="grid grid-cols-3 gap-3 desk:col-span-12 desk:mt-4 desk:gap-6">
              {c.gallery.map((g) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={g.src}
                  src={asset(g.src)}
                  alt={g.alt}
                  loading="lazy"
                  style={{ objectPosition: g.pos }}
                  className="aspect-[3/4] w-full object-cover"
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
