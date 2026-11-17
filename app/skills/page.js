import { Brain, Code, Layout, Server, Users, Wrench } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skills, softSkills, tools } from "@/data/portfolio";

export const metadata = { title: "Skills", description: "Technical skills and tools." };

const icons = { Brain, Code, Layout, Server };

function SkillItem({ skill }) {
  // Items with a `level` render as a progress bar; others render as a tag.
  if (typeof skill.level !== "number") return <li className="tag tag-lg">{skill.name}</li>;
  return (
    <li className="skill-meter">
      <div className="skill-row">
        <span>{skill.name}</span>
        <span className="muted">{skill.level}%</span>
      </div>
      <div className="skill-bar" role="progressbar" aria-label={skill.name} aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
        <span style={{ "--level": `${skill.level}%` }} />
      </div>
    </li>
  );
}

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="What I work with"
        description="Languages, frameworks and tools I've used across my projects, from full-stack web apps to AI tools and C programs."
      />

      <section className="section-tight">
        <div className="container grid grid-2">
          {skills.map((group, i) => {
            const Icon = icons[group.icon] || Code;
            return (
              <Reveal key={group.category} delay={(i % 2) * 80} className="card skill-card">
                <h3 className="card-title"><Icon size={20} aria-hidden="true" /> {group.category}</h3>
                <ul className="tag-list skill-tags">
                  {group.items.map((s) => <SkillItem key={s.name} skill={s} />)}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <Reveal className="card">
            <SectionHeading eyebrow="Tools" title={<span className="card-title"><Wrench size={22} aria-hidden="true" /> Tools & platforms</span>} />
            <ul className="tag-list">
              {tools.map((t) => <li key={t} className="tag tag-lg">{t}</li>)}
            </ul>
          </Reveal>
          <Reveal className="card" delay={100}>
            <SectionHeading eyebrow="Beyond code" title={<span className="card-title"><Users size={22} aria-hidden="true" /> Soft skills</span>} />
            <ul className="tag-list">
              {softSkills.map((t) => <li key={t} className="tag tag-lg">{t}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
