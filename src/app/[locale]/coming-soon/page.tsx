import { ArrowUpRight, Radio } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#0b0d0e] text-[#f5f3ee]">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute -right-24 -top-32 size-[32rem] rounded-full border border-[#d9d2c4]/20" />
        <div className="absolute -right-8 -top-16 size-[24rem] rounded-full border border-[#d9d2c4]/15" />
        <div className="absolute -bottom-48 -left-24 size-[34rem] rounded-full border border-[#d9d2c4]/20" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-[#d9d2c4]/20" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between gap-16 px-6 py-8 sm:px-10 lg:px-16 lg:py-10">
        <header className="flex items-center justify-between border-b border-[#d9d2c4]/20 pb-6">
          <a href="/" className="font-serif text-xl tracking-[0.18em] text-[#f5f3ee]">
            موجات
          </a>
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#b9b4ab]">
            <Radio className="size-3 text-[#e46b4f]" aria-hidden="true" />
            Coming soon
          </span>
        </header>

        <section className="flex max-w-4xl flex-1 flex-col justify-center py-8" aria-labelledby="coming-soon-title">
          <p className="mb-6 text-sm uppercase tracking-[0.28em] text-[#e46b4f]">Something new is taking shape</p>
          <h1 id="coming-soon-title" className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            A new wave of stories is almost here.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-[#b9b4ab] sm:text-lg">
            We are preparing a sharper, richer home for culture, cinema, ideas, and the people shaping our world. Stay close.
          </p>
          <a
            href="mailto:hello@mowijat.com"
            className="mt-10 inline-flex w-fit items-center gap-3 border border-[#f5f3ee]/40 px-5 py-3 text-sm transition-colors hover:border-[#e46b4f] hover:text-[#e46b4f]"
          >
            Get in touch
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </section>

        <footer className="flex flex-col gap-3 border-t border-[#d9d2c4]/20 pt-5 text-xs uppercase tracking-[0.18em] text-[#817d77] sm:flex-row sm:items-center sm:justify-between">
          <span>Launching soon</span>
          <span>© {new Date().getFullYear()} Mowijat</span>
        </footer>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Coming soon | Mowijat",
  description: "Mowijat is preparing a new home for culture, cinema, and ideas.",
};

export const dynamic = "force-static";

