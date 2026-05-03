import React from "react";
import { ArrowUpRight, ExternalLink, Check } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Reveal, SectionHeading } from "./section";
import { cn } from "../lib/utils";
import { projects } from "../lib/site";

const Projects = () => {
  return (
    <section id="projects" className="container-page section-y">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading eyebrow="Selected work" title="A few things I'm proud of." />
        <a href="#contact" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline">
          Have a project? →
        </a>
      </div>

      <div className="mt-12 space-y-10 md:space-y-16">
        {projects.map((p, i) => {
          const reversed = i % 2 === 1;
          const what = p.what ?? p.summary;
          const why = p.why ?? p.highlights;
          const how = p.how ?? p.stack;

          return (
            <Reveal key={p.slug} delay={Math.min(i, 4) * 0.05}>
              <article className="group grid gap-6 overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-2 md:gap-0">
                {/* Image */}
                <a
                  href={p.liveUrl || p.repoUrl || "#"}
                  target={p.liveUrl || p.repoUrl ? "_blank" : undefined}
                  rel="noreferrer"
                  className={cn(
                    "relative block aspect-[4/3] overflow-hidden bg-muted md:aspect-auto",
                    reversed ? "md:order-2" : "md:order-1",
                  )}
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                    {p.year} · {p.role}
                  </span>
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur transition-all group-hover:bg-foreground group-hover:text-background">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>

                {/* Content */}
                <div
                  className={cn(
                    "flex flex-col gap-5 p-6 md:p-8 lg:p-10",
                    reversed ? "md:order-1" : "md:order-2",
                  )}
                >
                  <div>
                    <h3 className="font-display text-2xl leading-tight md:text-3xl">
                      <a
                        href={p.liveUrl || p.repoUrl || "#"}
                        target={p.liveUrl || p.repoUrl ? "_blank" : undefined}
                        rel="noreferrer"
                        className="transition-colors hover:text-gradient-brand"
                      >
                        {p.title}
                      </a>
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <Block label="What">
                      <p className="text-sm text-muted-foreground md:text-base">{what}</p>
                    </Block>

                    <Block label="Why">
                      <ul className="space-y-1.5">
                        {why.slice(0, 3).map((w) => (
                          <li key={w} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </Block>

                    <Block label="How">
                      <div className="flex flex-wrap gap-1.5">
                        {how.map((s) => (
                          <span
                            key={s}
                            className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                          >
                            <Check className="h-3 w-3 opacity-60" />
                            {s}
                          </span>
                        ))}
                      </div>
                    </Block>
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                    {p.liveUrl && p.liveUrl !== "#" && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-gradient-brand"
                      >
                        Live demo <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {p.repoUrl && p.repoUrl !== "#" && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" /> Code
                      </a>
                    )}
                    <a
                      href={p.liveUrl || p.repoUrl || "#"}
                      target={p.liveUrl || p.repoUrl ? "_blank" : undefined}
                      rel="noreferrer"
                      className="ml-auto inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
                    >
                      Case study →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 text-center md:hidden">
        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
          Have a project? →
        </a>
      </div>
    </section>
  );
};

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
      {children}
    </div>
  );
}

export default Projects;
