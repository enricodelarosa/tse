function SectionHeading({ kicker, title }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        <span className="heading-rule" aria-hidden="true" />
      </div>
    </div>
  );
}

export default SectionHeading;
