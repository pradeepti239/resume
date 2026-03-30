import SectionHeading from "../layout/SectionHeading";
import TimelineItem from "../shared/TimelineItem";

function ExperienceSection({ id, title, description, items }) {
  return (
    <section id={id} className="reveal">
      <SectionHeading title={title} description={description} />

      <div className="section-card timeline featured">
        {items.map((item) => (
          <TimelineItem key={`${item.role}-${item.company}`} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;