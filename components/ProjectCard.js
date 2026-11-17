import { ExternalLink, FolderGit2, Trophy } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectCard({ project }) {
  const { title, description, tech, category, event, github, demo } = project;

  return (
    <article className="card project-card">
      <div className="project-card-top">
        <span className="project-icon" aria-hidden="true">
          <FolderGit2 size={22} />
        </span>
        <div className="project-card-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`${title} source code on GitHub`} title="Source code">
              <GithubIcon size={18} />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`${title} live demo`} title="Live demo">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="project-category">{category}</p>
      <h3>{title}</h3>
      {event && (
        <p className="project-event">
          <Trophy size={14} aria-hidden="true" /> Built for {event}
        </p>
      )}
      <p className="muted project-desc">{description}</p>

      <ul className="tag-list" aria-label="Technologies used">
        {tech.map((t) => (
          <li key={t} className="tag">{t}</li>
        ))}
      </ul>
    </article>
  );
}
