import { ArrowRight, Award, Code, GraduationCap, Download, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import { profile, projects, stats } from "@/data/portfolio";

const highlights = [
  { href: "/about", Icon: GraduationCap, title: "About", text: "Education, interests and career goals." },
  { href: "/skills", Icon: Code, title: "Skills", text: "Languages, frameworks and tools I work with." },
  { href: "/achievements", Icon: Award, title: "Achievements", text: "Certifications, awards and hackathons." },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  // First and last initials, e.g. "Aishwarya A S" → "AS".
  const words = profile.name.trim().split(/\s+/);
  const initials = (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <Reveal className="hero-text">
            {profile.available && (
              <p className="badge"><span className="pulse" aria-hidden="true" /> Open to internships & opportunities</p>
            )}
            <h1>
              Hi, I'm <span className="gradient-text">{profile.shortName}</span>
            </h1>
            <p className="hero-role">{profile.role}</p>
            <p className="lead">{profile.tagline}</p>
            <p className="muted hero-location"><MapPin size={16} aria-hidden="true" /> {profile.location}</p>
            <div className="btn-row">
              <Button href="/projects" icon={ArrowRight}>View my work</Button>
              <Button href={profile.resumeUrl} variant="secondary" icon={Download} iconPosition="left" external>
                Download resume
              </Button>
            </div>
            <SocialLinks />
          </Reveal>

          <Reveal className="hero-visual" delay={150}>
            <div className="avatar" aria-hidden="true">
              <span>{initials}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <ul className="stats">
            {stats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 80} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="muted">{s.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            action={<Button href="/projects" variant="ghost" icon={ArrowRight}>All projects</Button>}
          />
          <div className="grid grid-3">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Explore" title="More about me" />
          <div className="grid grid-3">
            {highlights.map(({ href, Icon, title, text }, i) => (
              <Reveal key={href} delay={i * 80}>
                <Link href={href} className="card link-card">
                  <span className="project-icon" aria-hidden="true"><Icon size={22} /></span>
                  <h3>{title}</h3>
                  <p className="muted">{text}</p>
                  <span className="link-arrow">Explore <ArrowRight size={16} aria-hidden="true" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta">
            <h2>Let's build something together</h2>
            <p className="lead">Have an internship, project or hackathon team in mind? I'd love to hear from you.</p>
            <Button href="/contact" icon={Mail}>Get in touch</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
