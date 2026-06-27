import { Briefcase, Check } from "lucide-react"
import { experience } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function Experience() {
  return (
    <section id="experience" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="Experience" />

        {experience.map((job) => (
          <div
            key={job.company}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Briefcase className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-primary">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                {job.period}
              </span>
            </div>

            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
