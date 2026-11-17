import { GraduationCap, Heart, Target } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about, profile } from "@/data/portfolio";

export const metadata = { title: "About", description: `About ${profile.name}` };

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About me" title="A little about who I am" description={profile.role} />

      <section className="section-tight">
        <div className="container about-grid">
          <Reveal className="prose">
            {about.summary.map((p, i) => <p key={i}>{p}</p>)}
          </Reveal>
          <Reveal className="card" delay={100}>
            <h3 className="card-title"><Heart size={20} aria-hidden="true" /> Interests</h3>
            <ul className="tag-list">
              {about.interests.map((i) => <li key={i} className="tag">{i}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Education" title="Where I've studied" />
          <ol className="timeline">
            {about.education.map((e, i) => (
              <Reveal as="li" key={e.degree} delay={i * 80} className="timeline-item">
                <span className="timeline-dot" aria-hidden="true"><GraduationCap size={16} /></span>
                <div className="card">
                  <p className="timeline-period">{e.period}</p>
                  <h3>{e.degree}</h3>
                  <p className="muted">{e.institution}</p>
                  <p className="timeline-detail">{e.detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Looking ahead" title="Career goals" />
          <ul className="grid grid-3">
            {about.goals.map((g, i) => (
              <Reveal as="li" key={i} delay={i * 80} className="card goal-card">
                <span className="project-icon" aria-hidden="true"><Target size={20} /></span>
                <p>{g}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
