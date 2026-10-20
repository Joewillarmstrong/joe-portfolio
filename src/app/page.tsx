import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Work />

        <section id="listening" className="scroll-mt-0 bg-band">
          <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-start gap-x-6 gap-y-8 px-5 py-16 desk:grid-cols-12 desk:px-10 desk:py-[104px]">
            <div className="flex flex-col gap-3.5 desk:col-span-3">
              <h2 className="text-[28px] font-medium tracking-[-0.02em]">What I&apos;m listening to</h2>
              <a
                href="https://open.spotify.com/playlist/0Drl8UTJaO83FMT1ik2YLx"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs"
              >
                Open the playlist
              </a>
            </div>
            <div className="desk:col-span-9 desk:col-start-4">
              <iframe
                data-testid="embed-iframe"
                title="Spotify playlist: what I'm listening to"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/playlist/0Drl8UTJaO83FMT1ik2YLx?utm_source=generator&si=5a26542439a74d14"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green text-paper">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-10 px-5 pb-16 pt-20 desk:gap-14 desk:px-10 desk:pb-[88px] desk:pt-28">
          <p className="text-[clamp(48px,9vw,140px)] font-medium leading-[0.92] tracking-[-0.05em]">Let&apos;s work together.</p>
          <div className="flex flex-wrap gap-x-10 gap-y-3 border-t border-paper/50 pt-5 font-mono text-sm">
            <a href="mailto:joearmstrong03@gmail.com" className="!text-paper">joearmstrong03@gmail.com</a>
            <span>0422 765 094</span>
            <span>Melbourne, Australia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
