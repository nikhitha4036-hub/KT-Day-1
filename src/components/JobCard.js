function JobCard({ job }) {
  return (
    <article className="job-card">
      <div>
        <span>{job.team}</span>
        <h3>{job.role}</h3>
        <p>{job.summary}</p>
      </div>
      <dl>
        <div>
          <dt>Location</dt>
          <dd>{job.location}</dd>
        </div>
        <div>
          <dt>Type</dt>
          <dd>{job.type}</dd>
        </div>
      </dl>
      <a href="#application-form">Apply</a>
    </article>
  );
}

export default JobCard;
