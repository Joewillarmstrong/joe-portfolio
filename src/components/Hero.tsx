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
      className="mx-auto grid max-w-[1360px] grid-cols-1 items-end gap-x-6 gap-y-10 px-5 pb-16 pt-14 desk:grid-cols-12 desk:gap-y-14 desk:px-10 desk:pb-24 desk:pt-[104px]"
    >
      <motion.h1
        {...rise()}
        className="text-[clamp(44px,8.4vw,128px)] font-medium leading-[0.95] tracking-[-0.045em] desk:col-span-10"
      >
        Music marketing for artists, labels and the people around them.
      </motion.h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        {...rise(0.15)}
        src={asset("joe-portrait.jpg")}
        alt="Portrait of Joe Armstrong"
        width={132}
        height={176}
        className="aspect-[3/4] w-[110px] max-w-[132px] object-cover grayscale desk:col-span-1 desk:col-start-12 desk:w-full desk:justify-self-end"
      />
      <div id="about" className="scroll-mt-4 flex flex-col gap-5 border-t border-ink pt-6 desk:col-span-7">
        <p className="text-[20px] leading-[1.4] tracking-[-0.015em] desk:text-2xl">
          Music has always been a huge part of my life. From my very first guitar lessons at age 8 through to working alongside global artists including Dermot Kennedy and The Lumineers, it has been the reason I wake up every day.
        </p>
      </div>
      <div className="flex flex-col gap-5 border-t border-ink pt-6 desk:col-span-4 desk:col-start-9">
        <p className="text-base leading-[1.65] text-body">
          This portfolio is a taste of the work I am proud to have been part of. I am always interested to hear about new projects and where I might be able to help. If you&apos;re interested in collaborating get in touch and let&apos;s chat, or even better, grab a coffee.
        </p>
        <a href="#work" className="self-start border-b border-ink pb-1 font-mono text-[13px] !text-ink no-underline">
          See the work
        </a>
      </div>
    </section>
  );
}
