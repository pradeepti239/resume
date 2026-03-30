import SectionHeading from "../layout/SectionHeading";
import ActivityCard from "../shared/ActivityCard";

function ActivitiesSection({ activities }) {
  return (
    <section id="activities" className="reveal">
      <SectionHeading
        title="Leadership & Activities"
        description="Mentorship, events, competitions, and communication experience."
      />

      <div className="two-col">
        {activities.map((item) => (
          <ActivityCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ActivitiesSection;