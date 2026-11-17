import PageHeader from "@/components/PageHeader";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/portfolio";

export const metadata = { title: "Projects", description: "Projects with descriptions, technologies, source code and live demos." };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description="A selection of academic, personal and hackathon projects. Filter by category, then open the source code or live demo."
      />
      <section className="section-tight">
        <div className="container">
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
