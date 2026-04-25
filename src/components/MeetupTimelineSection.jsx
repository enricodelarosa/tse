import MeetupCard from "./MeetupCard";
import SectionHeading from "./SectionHeading";

function MeetupTimelineSection({ meetups }) {
  return (
    <section
      id="timeline"
      className="section-block"
      aria-labelledby="timeline-heading"
    >
      <SectionHeading
        kicker="Meetup Timeline"
        title="The first two sessions"
        headingId="timeline-heading"
      />

      <div className="timeline-grid">
        {meetups.map((meetup, index) => (
          <MeetupCard key={meetup.date} meetup={meetup} sequence={index + 1} />
        ))}
      </div>
    </section>
  );
}

export default MeetupTimelineSection;
