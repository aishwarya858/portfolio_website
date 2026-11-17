"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectsGrid({ projects }) {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    [projects]
  );
  const [active, setActive] = useState("All");

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`chip ${active === cat ? "chip-active" : ""}`}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
          >
            {cat}
            <span className="chip-count">
              {cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-3" aria-live="polite">
        {visible.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
