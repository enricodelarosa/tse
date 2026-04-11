function MeetupCard({ meetup }) {
  return (
    <article className="timeline-card">
      <img
        className="timeline-photo"
        src={meetup.image}
        alt={meetup.imageAlt}
        loading="lazy"
      />
      <div className="timeline-body">
        <p className="date-pill">{meetup.date}</p>
        <h3>{meetup.title}</h3>
        <p>{meetup.summary}</p>
        <p>{meetup.details}</p>
        <div className="resource-links">
          {meetup.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default MeetupCard;
