import SectionHeading from "../layout/SectionHeading";

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="reveal">
      <SectionHeading
        title="Skills"
        description="Technical and professional capabilities across engineering, analysis, design, and collaboration."
      />

      <div className="section-card skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;