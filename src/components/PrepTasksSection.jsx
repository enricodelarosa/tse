import SectionHeading from "./SectionHeading";

function PrepTasksSection({ tasks }) {
  return (
    <section className="section-block prep-panel">
      <SectionHeading
        kicker="Before The Next Session"
        title="Setup tasks for the group"
      />

      <div className="prep-grid">
        {tasks.map((task) => (
          <article className="prep-card" key={task.title}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <a href={task.href} target="_blank" rel="noreferrer">
              {task.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PrepTasksSection;
