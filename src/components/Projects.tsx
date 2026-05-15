import React from "react";
import { ArrowUpRight, ExternalLink, Check, Circle, ChevronRight } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Reveal, SectionHeading } from "./section";
import { cn } from "../lib/utils";
import { projects } from "../lib/site";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="container-page section-y">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading eyebrow="Development & Design" title={t("projectSectionTitle")} />
        <a href="#contact" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline">
          {t("haveAProject")} →
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
              <article className="group grid md:gap-6 overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-2 md:gap-0">
                {/* Image */}
                <a
                  href={p.liveUrl || p.repoUrl || "#"}
                  target={p.liveUrl || p.repoUrl ? "_blank" : undefined}
                  rel="noreferrer"
                  className={cn(
                    " block aspect-[4/3] overflow-hidden bg-muted md:aspect-auto max-h-[180px] md:max-h-[350px] w-full",
                    reversed ? "md:order-2" : "md:order-1",
                  )}
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                 
                </a>

                {/* Content */}
                <div
                  className={cn(
                    "relative flex flex-col gap-2 md:gap-5 p-4 md:p-4 lg:p-4",
                    reversed ? "md:order-1" : "md:order-2",
                  )}
                >
                   {/* <span className="absolute right-3 top-0 md:top-3 rounded-full border border-border bg-background/80 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                    {p.year} · {p.role}
                  </span> */}
                  <div className="flex justify-between">
                    
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

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                    {p.liveUrl && p.liveUrl !== "#" && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                         <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    {p.repoUrl && p.repoUrl !== "#" && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        <GitHubIcon className="h-5 w-5" /> 
                      </a>
                    )}
                    
                  </div>
                  </div>

                  <div className="md:space-y-4 space-y-2">
                    <Block label="What">
                      <p className="text-sm text-muted-foreground md:text-base">{what}</p>
                    </Block>

                    <Block label="Why">
                      <ul className="space-y-1.5">
                        {why.slice(0, 3).map((w) => (
                            <li key={w} className="flex gap-2 text-sm text-muted-foreground items-start">
                                <Circle className="h-1.5 w-1.5 mt-1.5 fill-current stroke-none" />
                              <span className="leading-snug">{w}</span>
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
                  
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 text-center md:hidden">
        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
         {t("haveAProject")} →
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
