function InquiryForm() {
  return (
    <form className="form-panel" aria-label="Business inquiry form">
      <div className="form-row">
        <label>
          Full name
          <input type="text" name="name" placeholder="Aarav Mehta" />
        </label>
        <label>
          Work email
          <input type="email" name="email" placeholder="aarav@company.com" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Company
          <input type="text" name="company" placeholder="Company name" />
        </label>
        <label>
          Inquiry type
          <select name="type" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Consulting services</option>
            <option>Technology delivery</option>
            <option>Partnership</option>
            <option>Media or analyst request</option>
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea
          name="message"
          rows="6"
          placeholder="Share the challenge, timeline, and any services you are interested in."
        />
      </label>
      <button type="submit">Send inquiry</button>
    </form>
  );
}

export default InquiryForm;
