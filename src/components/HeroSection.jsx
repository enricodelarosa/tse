function HeroSection({ stats }) {
  return (
    <section
      id="overview"
      className="hero-panel"
      aria-labelledby="overview-heading"
    >
      <div className="hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Local builders from Tandag, Surigao del Sur</p>
          <h1 id="overview-heading">Tandag Software Engineers</h1>
          <p className="hero-copy">
            Started by remote developers and computer science students, the
            group is building a local space for learning, shipping, and sharing
            technical work together.
          </p>
          <div className="hero-actions">
            <span className="hero-chip">Remote devs + CS students</span>
            <span className="hero-chip">Hands-on React cycle active</span>
            <span className="hero-chip">Next meetup: TBA</span>
          </div>
        </div>

        <aside className="hero-brief" aria-label="Community brief">
          <p className="brief-label">Current Brief</p>
          <p className="brief-title">
            Build a local pipeline for learning and shipping together.
          </p>
          <p className="brief-copy">
            Each meetup adds one layer: shared tools, hands-on demos, project
            walkthroughs, and better judgment around AI-assisted learning.
          </p>
          <div className="brief-tracks">
            <div className="brief-track">
              <span>01</span>
              <span>Connect</span>
            </div>
            <div className="brief-track">
              <span>02</span>
              <span>Practice</span>
            </div>
            <div className="brief-track">
              <span>03</span>
              <span>Ship</span>
            </div>
          </div>
        </aside>
      </div>

      <div className="hero-grid">
        {stats.map((stat, index) => (
          <article className="hero-card" key={stat.label}>
            <span className="card-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="hero-label">{stat.label}</span>
            <strong>{stat.value}</strong>
            <p>{stat.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
