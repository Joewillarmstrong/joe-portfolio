"use client";

import { motion } from "motion/react";
import { asset } from "@/lib";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1360px] grid-cols-1 items-stretch gap-x-6 gap-y-10 px-5 pb-16 pt-14 desk:grid-cols-12 desk:gap-y-14 desk:px-10 desk:pb-24 desk:pt-[88px]"
    >
      <motion.h1
        {...rise()}
        className="text-[clamp(40px,6.6vw,100px)] font-medium leading-[0.95] tracking-[-0.045em] desk:col-span-8"
      >
        Music marketing for artists, labels and the people around them.
      </motion.h1>
      <motion.div {...rise(0.15)} className="relative aspect-[4/3] w-full overflow-hidden desk:col-span-4 desk:aspect-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("joe-portrait.jpg")}
          alt="Portrait of Joe Armstrong"
          className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
        />
      </motion.div>
      <div id="about" className="scroll-mt-4 flex flex-col gap-5 self-start border-t border-ink pt-6 desk:col-span-8">
        <p className="text-[17px] leading-[1.65] text-body">
          Music is a huge part of my life. From my very first guitar lessons at age 8 through to travelling the world alongside global artists including Dermot Kennedy and The Lumineers. Through my time at major record labels I have developed my skillset in being able to lead major campaigns from album releases to tours and even TV shows.
        </p>
      </div>
      <div className="flex flex-col gap-5 self-start border-t border-ink pt-6 desk:col-span-4">
        <p className="text-[17px] leading-[1.65] text-body">
          This portfolio is a taste of the work I am proud to have been part of. I am always interested to hear about new projects and where I might be able to help. If you&apos;re interested in collaborating get in touch and let&apos;s chat, or even better, grab a coffee.
        </p>
        <a href="#work" className="self-start border-b border-ink pb-1 font-mono text-[13px] !text-ink no-underline">
          See the work
        </a>
      </div>
    </section>
  );
}
