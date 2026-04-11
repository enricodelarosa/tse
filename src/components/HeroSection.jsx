function HeroSection({ stats }) {
  return (
    <section className="hero-panel">
      <p className="eyebrow">Local builders from Tandag, Surigao del Sur</p>
      <h1>Tandag Software Engineers</h1>
      <p className="hero-copy">
        Started by remote developers and computer science students, the group is
        building a local space for learning, shipping, and sharing technical
        work together.
      </p>

      <div className="hero-grid">
        {stats.map((stat) => (
          <article className="hero-card" key={stat.label}>
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
