import MeetupCard from "./MeetupCard";
import SectionHeading from "./SectionHeading";

function MeetupTimelineSection({ meetups }) {
  return (
    <section className="section-block">
      <SectionHeading
        kicker="Meetup Timeline"
        title="The first two sessions"
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
