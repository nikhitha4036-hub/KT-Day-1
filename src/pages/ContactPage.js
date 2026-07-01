import ContactDetails from '../components/ContactDetails';
import InquiryForm from '../components/InquiryForm';
import SectionHeading from '../components/SectionHeading';
import { locations } from '../data/companyData';

function ContactPage() {
  return (
    <section className="page-section" id="contact" aria-labelledby="contact-title">
      <SectionHeading
        eyebrow="Contact Page"
        title="Start a business inquiry"
        titleId="contact-title"
        description="Tell us what you are planning. Our client team reviews every inquiry and routes it to the right practice lead within one business day."
      />

      <div className="contact-layout">
        <InquiryForm />
        <ContactDetails />
      </div>
    </section>
  );
}

export default ContactPage;
