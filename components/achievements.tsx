import { Trophy } from "lucide-react"
import { achievements } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" title="Achievements" />

        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Trophy className="size-4" />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
