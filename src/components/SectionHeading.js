function SectionHeading({ eyebrow, title, description, titleId }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SectionHeading;
