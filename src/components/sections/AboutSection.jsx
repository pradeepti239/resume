import SectionHeading from "../layout/SectionHeading";

function AboutSection({ about }) {
  return (
    <section id="about" className="reveal">
      <SectionHeading
        title="About"
        description="A concise overview of my academic background, professional focus, and strengths."
      />
      <div className="section-card">
        <p>{about}</p>
      </div>
    </section>
  );
}

export default AboutSection;