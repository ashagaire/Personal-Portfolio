import React, { useState } from "react";
import { Calendar, Check, Copy, Mail } from "lucide-react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { toast } from "react-toastify";
import { Button } from "./ui/button";
import { Reveal } from "./section";
import { site } from "../lib/site";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Couldn't copy — try selecting it manually");
    }
  };

  return (
    <section id="contact" className="container-page section-y">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-16 text-white gradient-brand">
          <div className="absolute inset-0 bg-dot-grid opacity-20" aria-hidden />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.22em] opacity-80">Let's connect</div>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Got an idea? <span className="italic">Let's bring it online.</span>
            </h2>
            <p className="mt-4 max-w-xl opacity-90">
              I love hearing what people want to build. Reach out on LinkedIn, drop me an email,
              or grab a 20-minute slot on my calendar — whichever feels easiest.
            </p>

<a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm opacity-90 hover:opacity-100"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Button asChild size="lg" className="bg-[color-mix(in_oklab,var(--card)_95%,transparent)] text-muted-foreground border border-white/30">
                <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon className="mr-2 h-4 w-4" /> Message on LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                onClick={copyEmail}
                className="bg-white/10 text-white border border-white/30 hover:bg-white/20"
              >
                {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {copied ? "Copied" : "Copy email"}
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href={site.bookingUrl} target="_blank" rel="noreferrer">
                  <Calendar className="mr-2 h-4 w-4" /> Book a meeting
                </a>
              </Button>
            </div>

            
          </div>
        </div>
      </Reveal>
    </section>
  );
}
