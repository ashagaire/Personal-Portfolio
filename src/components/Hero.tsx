import React, { useState } from "react";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "./ui/button";
import { Reveal } from "./section";
import { site } from "../lib/site";
import { FileDown } from "lucide-react";
import { useTranslation } from "react-i18next";

import portrait from "../assets/profilepicture.jpeg";

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

      <div className="container-page relative grid items-center gap-8 pt-16 pb-8 md:grid-cols-[1.15fr_1fr] md:pt-24 md:pb-24">
        {/* Left — copy */}
        <div className="order-2 md:order-1 ">
         

                    <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[1.05] tracking-tight">
              Crafting Seamless
              <br />
              Digital <span className="text-gradient-brand italic">Experiences</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              A {site.role.toLowerCase()} who turns ideas
              into fast, accessible products with React, Next.js and .NET.
            </p>

            <div className="mt-6 space-y-4 text-muted-foreground">
            {/* <p className="about-text-style">{t("aboutParagraph1")}</p> */}
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
          </Reveal>

        
        </div>

        {/* Right — portrait with floating chips */}
        <div className="order-1 md:order-2 pt-16 md:pt-16">
<Reveal delay={0.1} >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* gradient backdrop circle */}
            <div
              className="absolute inset-6 rounded-full opacity-90 blur-2xl"
              style={{ background: "var(--gradient-brand)" }}
              aria-hidden
            />
            <div className="absolute inset-0 rounded-full border border-border/60 bg-surface/60 backdrop-blur" aria-hidden />

            {/* portrait mask */}
            <div className="absolute inset-3 overflow-hidden rounded-full ring-1 ring-border/60">
              <img
                src={portrait}
                alt={`Portrait of ${site.name}`}
                // width={800}
                // height={1024}
                className="h-full w-full object-cover"
              />
            </div>

            {/* chip: Hi, I'm Asha */}
            <div className="absolute left-0 top-1/4 -translate-x-2 rounded-2xl border border-border bg-[color-mix(in_oklab,var(--card)_95%,transparent)] px-4 py-2 text-sm shadow-lg backdrop-blur">
              <span className="font-medium">Hi, I'm {site.name.split(" ")[0]}</span>
            </div>

            {/* chip: experience */}
            <div className="absolute -right-2 bottom-12 flex items-center gap-2 rounded-2xl border border-border bg-[color-mix(in_oklab,var(--card)_95%,transparent)] px-4 py-2 text-xs shadow-lg backdrop-blur">
              
              <div className="leading-tight">
                <div className="font-display text-sm font-medium">Studying at</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Hive Helsinki
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center">
            <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col md:flex-row items-center gap-3">
              <Button asChild size="lg" className="gradient-brand text-white border-0 hover:opacity-90 glow-brand rounded-full">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Let's talk <Send className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="gradient-brand text-white border-0 hover:opacity-90 glow-brand rounded-full">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <FileDown className="mr-2 h-4 w-4" /> {t("downloadResume") || "Download CV"}
                </a>
              </Button>
             
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Connect with me
              </div>
              <div className="mt-3 flex items-center gap-2">
                {[
                  { href: site.socials.github, label: "GitHub", Icon: GitHubIcon },
                  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
                  { href: "#", label: "Email", Icon: Send, dummy: true },
                ].map(({ href, label, Icon, dummy }) => (
                  <a
                    key={label}
                    href={href}
                    target={dummy ? undefined : "_blank"}
                    rel={dummy ? undefined : "noreferrer"}
                    onClick={dummy ? (e) => e.preventDefault() : undefined}
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
        
          
      </div>
    </section>
  );
};

export default Hero;
