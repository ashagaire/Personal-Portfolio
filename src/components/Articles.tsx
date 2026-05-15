import React from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { Reveal, SectionHeading } from "./section";
import { articles, site } from "../lib/site";
import { useTranslation } from "react-i18next";

export function Articles() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface border-y border-border/60">
      <div className="container-page section-y">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Writing · Medium archive"
            title={t("blogsFromPreLLMEra")}
            description={t("blogsFromPreLLMEraDescription")}
          />
          <a
            href={site.socials.medium}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
          >
            View on Medium <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <a
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-foreground/40"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen className="h-3 w-3 text-accent2" />
                    {a.tag}
                  </span>
                  <span>{new Date(a.date).getFullYear()}</span>
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm text-brand">
                  Read on Medium{" "}
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
