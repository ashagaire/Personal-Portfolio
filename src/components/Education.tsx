import React from "react";
import { GraduationCap, Star } from "lucide-react";
import { Reveal, SectionHeading } from "./section";
import { education } from "../lib/site";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className="container-page section-y" id="education">
      <SectionHeading eyebrow="Education" title={t("alwaysLearning")} />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.05}>
            <div className={`relative flex h-full flex-col rounded-2xl border p-6 ${e.featured ? "border-[color-mix(in_oklab,var(--brand)_50%,transparent)] bg-[color-mix(in_oklab,var(--brand)_5%,transparent)]" : "border-border bg-card"}`}>
              {e.featured && (
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand-foreground">
                  <Star className="h-3 w-3" /> Current
                </div>
              )}
              <GraduationCap className="h-6 w-6 text-brand" />
              <div className="mt-4 font-display text-lg">{t(e.school)}</div>
              <div className="text-sm font-medium">{t(e.program)}</div>
              {e.description && (
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t(e.description)}
                </div>
              )}
              <div className="mt-auto pt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {e.period} · {e.location}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Education;
