import { Mail, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

const links = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "monish-p", href: profile.linkedin },
  { icon: GithubIcon, label: "GitHub", value: "monishvp", href: profile.github },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="06"
          title="Get In Touch"
          subtitle="I'm open to new roles and interesting projects. Feel free to reach out — I'll get back to you soon."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <link.icon className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {link.label}
                </p>
                <p className="truncate font-medium transition-colors group-hover:text-primary">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
