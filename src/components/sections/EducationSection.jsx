import SectionHeading from "../layout/SectionHeading";

function EducationSection({ education }) {
  return (
    <section id="education" className="reveal">
      <SectionHeading
        title="Education"
        description="Academic history and relevant coursework."
      />

      <div className="two-col">
        {education.map((item) => (
          <div className="section-card education-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.school}</p>
            <p className="coursework">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;