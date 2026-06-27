import { GraduationCap } from "lucide-react"
import { profile, education } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="About Me" />
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {profile.about}
          </p>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <GraduationCap className="size-5" />
              </span>
              <h3 className="font-semibold">Education</h3>
            </div>
            <p className="font-medium">{education.institution}</p>
            <p className="mt-1 text-sm text-muted-foreground">{education.degree}</p>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{education.period}</span>
              <span className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-accent">
                {education.cgpa}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
