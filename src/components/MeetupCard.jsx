function MeetupCard({ meetup, sequence }) {
  return (
    <article className="timeline-card">
      <div className="timeline-media">
        <img
          className="timeline-photo"
          src={meetup.image}
          alt={meetup.imageAlt}
          loading="lazy"
        />
        <p className="timeline-badge">
          Operation {String(sequence).padStart(2, "0")}
        </p>
      </div>
      <div className="timeline-body">
        <div className="timeline-header">
          <p className="date-pill">{meetup.date}</p>
          <span className="timeline-status">Finished</span>
        </div>
        <h3>{meetup.title}</h3>
        <p className="timeline-copy">{meetup.summary}</p>
        <p>{meetup.details}</p>
        <div className="resource-links">
          {meetup.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default MeetupCard;
