function ApplicationForm({ jobs }) {
  return (
    <form
      className="form-panel application-form"
      id="application-form"
      aria-label="Job application form"
    >
      <div className="application-intro">
        <span className="card-kicker">Application form</span>
        <h3>Submit your profile</h3>
      </div>
      <div className="form-row">
        <label>
          Full name
          <input type="text" name="candidate-name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="candidate-email" placeholder="you@email.com" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Role
          <select name="role" defaultValue="">
            <option value="" disabled>
              Select role
            </option>
            {jobs.map((job) => (
              <option key={job.role}>{job.role}</option>
            ))}
          </select>
        </label>
        <label>
          LinkedIn or portfolio
          <input type="url" name="portfolio" placeholder="https://..." />
        </label>
      </div>
      <label>
        Why this role?
        <textarea
          name="cover-note"
          rows="5"
          placeholder="Tell us about relevant experience, strengths, and notice period."
        />
      </label>
      <label className="file-input">
        Resume
        <input type="file" name="resume" />
      </label>
      <button type="submit">Send application</button>
    </form>
  );
}

export default ApplicationForm;
