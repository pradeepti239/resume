import Carousel from "./Carousel";

function ActivityCard({ item }) {
  return (
    <div className="section-card activity-card">
      <div className="timeline-top">
        <div>
          <h3>{item.title}</h3>
          <p>{item.org}</p>
        </div>
      </div>

      <div className="timeline-layout has-album">
        <div>
          <p className="coursework">{item.text}</p>
        </div>

        <Carousel images={item.images} altPrefix={item.title} />
      </div>
    </div>
  );
}

export default ActivityCard;