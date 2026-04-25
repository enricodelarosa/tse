import SectionHeading from "./SectionHeading";

function ProjectShowcaseSection({ assignments }) {
  return (
    <section
      id="projects"
      className="section-block showcase-panel"
      aria-labelledby="projects-heading"
    >
      <SectionHeading
        kicker="May 2, 2026"
        title="Assigned React projects for experience and showcase"
        headingId="projects-heading"
      />

      <div className="projects-grid">
        {assignments.map((assignment, index) => (
          <article className="project-card" key={assignment.nickname}>
            <div className="project-card-top">
              <p className="project-nickname">{assignment.nickname}</p>
              <span className="assignment-id">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3>{assignment.project}</h3>
            <p className="project-owner">{assignment.fullName}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectShowcaseSection;
