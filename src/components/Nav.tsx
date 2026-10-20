"use client";

import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#listening", label: "Listening" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="mx-auto max-w-[1360px] border-b border-ink">
      <nav aria-label="Main" className="flex h-16 items-center justify-between px-5 desk:px-10">
        <a href="#top" onClick={close} className="whitespace-nowrap text-[15px] font-semibold !text-ink no-underline">
          Joe Armstrong
        </a>
        <div className="hidden items-center gap-8 font-mono text-xs desk:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="!text-ink no-underline">{l.label}</a>
          ))}
          <a href="mailto:joearmstrong03@gmail.com" className="no-underline">Email me</a>
        </div>
        <button
          type="button"
          className="font-mono text-xs desk:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="flex flex-col gap-4 border-t border-ink px-5 py-5 font-mono text-sm desk:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className="!text-ink no-underline">{l.label}</a>
          ))}
          <a href="mailto:joearmstrong03@gmail.com" onClick={close} className="no-underline">Email me</a>
        </div>
      )}
    </header>
  );
}
