import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          title="Featured Projects"
          subtitle="A selection of platforms and products I've built across full-stack, mobile, and AI."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-pretty text-lg font-semibold leading-snug">
                  {project.name}
                </h3>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>

              <ul className="mb-5 flex flex-1 flex-col gap-2">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-secondary/60 px-2 py-1 font-mono text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
