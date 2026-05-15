import React from 'react';
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-px w-8 gradient-brand" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2 className="font-display text-3xl leading-[1.1] md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
