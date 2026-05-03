import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { Reveal, SectionHeading } from "./section";
import { languages, site } from "../lib/site";
import portrait from "../assets/portrait.jpg";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <section id="about" className="container-page section-y">
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
        <Reveal>
          <div className="relative">
            {/* gradient frame */}
            <div className="absolute -inset-3 -z-10 rounded-[2rem] opacity-70 blur-2xl gradient-brand" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border bg-surface">
              <img
                src={portrait}
                alt={`Portrait of ${site.name}`}
                width={800}
                height={1024}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-white backdrop-blur">
                <span className="font-mono uppercase tracking-wider opacity-80">Currently</span>
                <span className="ml-2">Espoo, Finland · Hive Helsinki '26</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow={t("about")}
            title={<>From Kathmandu to Espoo, by way of code.</>}
          />
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p className="about-text-style">{t("aboutParagraph1")}</p>
            <p className="about-text-style-2">
              {isExpanded ? (
                <>
                  {t("aboutParagraph2a")}
                  <br />
                  <br />
                  {t("aboutParagraph2b")}
                  <br />
                  <br />
                  {t("aboutParagraph2c")}
                  <br />
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-primary hover:underline mt-2 font-medium"
                  >
                    {t("readLess")}
                  </button>
                </>
              ) : (
                <>
                  {t("aboutParagraph2ReadLess")}
                  <br />
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="text-primary hover:underline mt-2 font-medium"
                  >
                    {t("readMore")}
                  </button>
                </>
              )}
            </p>
          </div>

          {/* Subtle languages — inline pills, not bars */}
          <div className="mt-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{t("languageSkills") || "Spoken languages"}</div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs"
                >
                  <span className="font-medium">{l.name}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button asChild variant="outline">
              <a href={site.cvUrl} target="_blank" rel="noreferrer">
                <FileDown className="mr-2 h-4 w-4" /> {t("downloadResume") || "Download CV"}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
