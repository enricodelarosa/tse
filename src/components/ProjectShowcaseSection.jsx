import SectionHeading from "./SectionHeading";

function ProjectShowcaseSection({ assignments }) {
  return (
    <section className="section-block showcase-panel">
      <SectionHeading
        kicker="May 2, 2026"
        title="Assigned React projects for experience and showcase"
      />

      <div className="projects-grid">
        {assignments.map((assignment) => (
          <article className="project-card" key={assignment.nickname}>
            <p className="project-nickname">{assignment.nickname}</p>
            <h3>{assignment.project}</h3>
            <p>{assignment.fullName}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectShowcaseSection;
