import React from "react";
import { Reveal, SectionHeading } from "./section";
import { experiences } from "../lib/site";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="container-page section-y">
      <SectionHeading eyebrow="Experience & Growth" title={t("experienceAndGrowth")} />
      <div className="mt-10 relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border md:left-1/2" aria-hidden />
        <ul className="space-y-10">
          {experiences.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.04}>
              <li className="relative grid gap-2 pl-10 md:grid-cols-2 md:pl-0 md:gap-12">
                <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-brand md:left-[calc(50%-6px)]" />
                <div className="md:text-right md:pr-10">
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {e.period}
                  </div>
                  <div className="mt-1 font-display text-xl">{t(e.role)}</div>
                  <div className="text-sm text-muted-foreground">{t(e.company)}</div>
                </div>
                <ul className="md:pl-10 space-y-1.5 text-sm text-muted-foreground">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-brand">›</span>
                      {t(b)}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
