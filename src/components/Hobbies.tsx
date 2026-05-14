import React from "react";
import { Mountain } from "lucide-react";
import { Reveal, SectionHeading } from "./section";
import { hobbies } from "../lib/site";
import { cn } from "../lib/utils";

export function Hobbies() {
  return (
    <section className="container-page section-y">
      <SectionHeading
        eyebrow="Beyond the Screen"
        title="Exploring trails and movies"
        description={hobbies.blurb}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3 ">
        {hobbies.images.map((img, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <figure
              className={cn(
                "group relative h-full min-h-[240px] overflow-hidden rounded-3xl border border-border",
                i === 0 && "md:col-span-2 md:row-span-2 md:min-h-[420px]",
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <figcaption className="absolute bottom-3 left-3 right-3 inline-flex items-center gap-2 text-white">
                <Mountain className="h-4 w-4 text-accent3" />
                <span className="font-mono text-[11px] uppercase tracking-wider">{img.caption}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
