import { Award, BadgeCheck, Calendar, Code, ExternalLink, Trophy } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { GithubIcon } from "@/components/BrandIcons";
import { achievements } from "@/data/portfolio";

export const metadata = { title: "Achievements", description: "Hackathons, coding challenges, awards and certifications." };

const allGroups = [
  { type: "Hackathon", title: "Hackathons", Icon: Trophy },
  { type: "Challenge", title: "Coding challenges", Icon: Code },
  { type: "Award", title: "Awards", Icon: Award },
  { type: "Certification", title: "Certifications", Icon: BadgeCheck },
];

export default function AchievementsPage() {
  // Only show groups that have at least one entry.
  const groups = allGroups
    .map((g) => ({ ...g, items: achievements.filter((a) => a.type === g.type) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Milestones along the way"
        description="Hackathons I've built for and coding challenges I've completed."
      />

      <section className="section-tight">
        <div className="container">
          <ul className="stats">
            {groups.map(({ type, title, Icon, items }) => (
              <li key={type} className="stat">
                <Icon size={22} className="accent" aria-hidden="true" />
                <span className="stat-value">{items.length}</span>
                <span className="muted">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {groups.map(({ type, title, Icon, items }) => (
        <section className="section" key={type}>
          <div className="container">
            <SectionHeading eyebrow={type} title={title} />
            <div className="grid grid-3">
              {items.map((a, i) => {
                const isGithub = a.link?.includes("github.com");
                return (
                  <Reveal key={a.title} delay={(i % 3) * 80} className="card achievement-card">
                    <span className="project-icon" aria-hidden="true"><Icon size={20} /></span>
                    <h3>{a.title}</h3>
                    <p className="exp-org">{a.issuer}</p>
                    <p className="muted exp-meta"><span><Calendar size={14} aria-hidden="true" /> {a.date}</span></p>
                    <p className="muted">{a.description}</p>
                    {a.link && (
                      <a href={a.link} target="_blank" rel="noopener noreferrer" className="link-arrow">
                        {isGithub ? <>View project <GithubIcon size={14} /></> : <>View credential <ExternalLink size={14} aria-hidden="true" /></>}
                      </a>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
