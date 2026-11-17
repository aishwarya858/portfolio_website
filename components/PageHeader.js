import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="page-header">
      <div className="container">
        <Reveal>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {description && <p className="lead">{description}</p>}
        </Reveal>
      </div>
    </section>
  );
}
