import React, { useMemo, useState } from "react";
import { Reveal, SectionHeading } from "./section";
import { tools, type Tool } from "../lib/site";
import { cn } from "../lib/utils";

const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

const groups: { key: Tool["group"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "design", label: "Design" },
  { key: "tools", label: "Tools" },
];

const Skills = () => {
  const [filter, setFilter] = useState<(typeof groups)[number]["key"]>("all");

  const list = useMemo(
    () => (filter === "all" ? tools : tools.filter((t) => t.group === filter)),
    [filter],
  );

  return (
    <section id="skills" className="bg-surface border-y border-border/60">
      <div className="container-page section-y">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The toolkit"
            title="Tools I reach for, daily."
            description="Filter by area to see what I lean on across frontend, backend, design and ops."
          />
          <div className="flex flex-wrap gap-1.5">
            {groups.map((g) => (
              <button
                key={g.key}
                type="button"
                onClick={() => setFilter(g.key)}
                className={cn(
                  "rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors",
                  filter === g.key
                    ? "border-foreground/40 bg-foreground text-background"
                    : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                )}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Auto-flowing tile grid — add as many tools as needed, layout adapts */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
          {list.map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i, 8) * 0.03}>
              <div className="group relative flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-[0_18px_40px_-20px_color-mix(in_oklab,var(--color-brand)_30%,transparent)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface">
                  <img
                    src={iconBase + t.icon}
                    alt=""
                    className="h-6 w-6 dark:[filter:brightness(0)_invert(1)_opacity(0.9)]"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-display text-sm leading-tight">{t.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {t.group}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
