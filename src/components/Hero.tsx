import React from "react";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "./ui/button";
import { Reveal } from "./section";
import { site } from "../lib/site";
import portrait from "../assets/portrait.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-12 pt-16 pb-20 md:grid-cols-[1.15fr_1fr] md:pt-24 md:pb-28">
        {/* Left — copy */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs backdrop-blur">
              <Sparkles className="h-3 w-3 text-accent2" />
              <span className="text-muted-foreground">{site.available}</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[1.05] tracking-tight">
              Crafting Seamless
              <br />
              Digital <span className="text-gradient-brand italic">Experiences</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              I'm {site.name.split(" ")[0]} — a {site.role.toLowerCase()} who turns ideas
              into fast, accessible products with React, Next.js and .NET.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="gradient-brand text-white border-0 hover:opacity-90 glow-brand rounded-full">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Let's talk <Send className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Portfolio <ArrowRight className="ml-2 h-4 w-4 -rotate-45" />
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

        {/* Right — portrait with floating chips */}
        <Reveal delay={0.1}>
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
                width={800}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating accent dots */}
            <span className="absolute -top-2 left-10 h-2.5 w-2.5 rounded-full bg-accent3" aria-hidden />
            <span className="absolute top-6 right-6 h-3 w-3 rounded-full border-2 border-brand" aria-hidden />
            <span className="absolute -bottom-1 left-1/3 h-2.5 w-2.5 rounded-full bg-accent2" aria-hidden />

            {/* chip: Hi, I'm Asha */}
            <div className="absolute left-0 top-1/4 -translate-x-2 rounded-2xl border border-border bg-card/95 px-4 py-2 text-sm shadow-lg backdrop-blur">
              <span className="font-medium">Hi, I'm {site.name.split(" ")[0]}</span>
            </div>

            {/* chip: experience */}
            <div className="absolute -right-2 bottom-12 flex items-center gap-2 rounded-2xl border border-border bg-card/95 px-4 py-2 text-xs shadow-lg backdrop-blur">
              <span className="flex h-7 w-7 items-center justify-center rounded-full gradient-brand text-white">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <div className="leading-tight">
                <div className="font-display text-sm font-medium">5+ Years</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  in code & design
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
