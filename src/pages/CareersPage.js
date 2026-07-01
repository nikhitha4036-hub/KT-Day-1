import ApplicationForm from '../components/ApplicationForm';
import JobCard from '../components/JobCard';
import SectionHeading from '../components/SectionHeading';
import { jobs } from '../data/companyData';

function CareersPage() {
  return (
    <section className="page-section careers" id="careers" aria-labelledby="careers-title">
      <SectionHeading
        eyebrow="Careers Section"
        title="Build serious work with thoughtful people"
        titleId="careers-title"
        description="Explore open roles across consulting, engineering, and corporate operations. We look for clear communicators, careful builders, and people who enjoy accountable teamwork."
      />

      <div className="jobs-grid">
        {jobs.map((job) => (
          <JobCard key={job.role} job={job} />
        ))}
      </div>

      <ApplicationForm jobs={jobs} />
    </section>
  );
}

export default CareersPage;
