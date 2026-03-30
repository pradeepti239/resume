import SectionHeading from "../layout/SectionHeading";

function ContactSection({ email, linkedin }) {
  return (
    <section id="contact" className="reveal">
      <SectionHeading
        title="Contact"
        description="Open to professional opportunities, collaborations, and academic connections."
      />

      <div className="section-card">
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${email}`}>
            Email Me
          </a>

          <a
            className="btn btn-secondary"
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;