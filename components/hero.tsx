import Image from "next/image"
import { ArrowDown, Download, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile, stats } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-40"
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-accent" />
            Available for new opportunities
          </span>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Hi, I&apos;m {profile.name}
          </h1>

          <p className="text-pretty text-xl font-medium text-primary md:text-2xl">
            {profile.role} <span className="text-muted-foreground">/</span>{" "}
            {profile.tagline}
          </p>

          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-accent" />
            {profile.location}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View Projects
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex size-11 items-center justify-center rounded-lg border border-border transition-colors hover:bg-secondary"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-11 items-center justify-center rounded-lg border border-border transition-colors hover:bg-secondary"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>

          <dl className="mt-4 grid w-full max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-foreground">{s.value}</dt>
                <dd className="text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
            <Image
              src={profile.photo || "/placeholder.svg"}
              alt={`Portrait of ${profile.name}`}
              width={600}
              height={760}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-6xl justify-center">
        <a
          href="#about"
          aria-label="Scroll to about"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
