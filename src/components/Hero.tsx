import React, { useState } from "react";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "./ui/button";
import { Reveal } from "./section";
import { site, languages } from "../lib/site";
import { FileDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import portrait from "../assets/profile_image.png";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden">
      {/* Subtle backdrop */}
      {/* <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" aria-hidden /> */}
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-x-8 gap-y-4 pt-16 pb-8 lg:grid-cols-[1.15fr_1fr] lg:pt-24 lg:pb-24">
        {/* Heading — Top on mobile, Left on desktop */}
        <div className="order-1 lg:col-start-1 lg:row-start-1">
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display max-w-md text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[1.05] tracking-tight">
              Building Precise
              <br />
              Logical{" "}
              <span className="text-gradient-brand italic">Interfaces</span>
            </h1>
          </Reveal>
        </div>

        {/* Right — portrait with floating chips (2nd on mobile, Right on desktop) */}
        <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 pt-8 lg:pt-16">
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              {/* gradient backdrop circle */}
              <div
                className="absolute inset-6 rounded-full opacity-90 blur-2xl"
                style={{ background: "var(--gradient-brand)" }}
                aria-hidden
              />
              <div
                className="absolute inset-0 rounded-full border border-border/60 bg-surface/60 backdrop-blur"
                aria-hidden
              />

              {/* portrait mask */}
              <div className="absolute inset-3 overflow-hidden rounded-full ring-1 ring-border/60">
                <img
                  src={portrait}
                  alt={`Portrait of ${site.name}`}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* chip: Hi, I'm Asha */}
              <div className="absolute left-0 top-1/4 -translate-x-2 rounded-2xl border border-border bg-[color-mix(in_oklab,var(--card)_95%,transparent)] px-4 py-2 text-sm shadow-lg backdrop-blur">
                <span className="font-medium">
                  {t("greeting")} {site.name.split(" ")[0]}
                </span>
              </div>

              {/* chip: experience */}
              <div className="absolute -right-2 bottom-12 flex items-center gap-2 rounded-2xl border border-border bg-[color-mix(in_oklab,var(--card)_95%,transparent)] px-4 py-2 text-xs shadow-lg backdrop-blur">
                <div className="leading-tight">
                  <div className="font-display text-xs ">{t("studyingAt")}</div>
                  <div className="font-mono text-[12px] mt-1 uppercase tracking-wider text-muted-foreground">
                    Hive Helsinki
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 justify-center items-center">
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col lg:flex-row items-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="gradient-brand text-white border-0 hover:opacity-90 glow-brand rounded-full"
                  >
                    <Link
                      to="contact"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-72}
                    >
                      {t("letsTalk")}
                      <Send className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="gradient-brand text-white border-0 hover:opacity-90 glow-brand rounded-full"
                  >
                    <a href="/CV_Asha_Gaire.pdf" download>
                      <FileDown className="mr-2 h-4 w-4" />{" "}
                      {t("downloadResume") || "Download CV"}
                    </a>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-12">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t("connectWithMe")}
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    {[
                      {
                        href: site.socials.github,
                        label: "GitHub",
                        Icon: GitHubIcon,
                      },
                      {
                        href: site.socials.linkedin,
                        label: "LinkedIn",
                        Icon: LinkedInIcon,
                      },
                    ].map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target={"_blank"}
                        rel={"noreferrer"}
                        aria-label={label}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground backdrop-blur transition-colors hover:border-foreground/40 hover:text-foreground"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>

        {/* About — 3rd on mobile, Left on desktop */}
        <div className="order-3 lg:col-start-1 lg:row-start-2">
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-surface-foreground lg:text-lg">
              {t("aboutParagraph1")}
            </p>

            <div className="mt-4 space-y-4  lg:text-lg">
              <div className="text-surface-foreground text-justify">
                {isExpanded ? (
                  <>
                    {t("aboutParagraph2b")}

                    <br />
                    <br />
                    {t("aboutParagraph2a")}
                    <br />
                    <br />
                    {t("aboutParagraph2c")}
                    <br />
                    <div className="mt-8">
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {t("languageSkills") || "Spoken languages"}
                      </div>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {languages.map((l) => (
                          <li
                            key={l.name}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs"
                          >
                            <span className="font-medium">{l.name}</span>
                            <span className="text-muted-foreground">·</span>
                            <span className="text-muted-foreground">
                              {l.level}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-primary hover:underline mt-2 font-medium"
                    >
                      {t("readLess")}
                    </button>
                  </>
                ) : (
                  <>
                    {t("aboutParagraph2b")}
                    <span> </span>
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-primary hover:underline mt-2 font-medium"
                    >
                      {t("readMore")}
                    </button>
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
