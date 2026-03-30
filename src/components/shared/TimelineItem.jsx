import Carousel from "./Carousel";

function TimelineItem({ item }) {
  return (
    <article className="timeline-item">
      <div className="timeline-top">
        <div>
          <h3>{item.role}</h3>
          <p>{item.company}</p>
        </div>
        <div className="date">{item.date}</div>
      </div>

      <div className="timeline-layout has-album">
        <div>
          <ul>
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>

        <Carousel images={item.images} altPrefix={item.role} />
      </div>
    </article>
  );
}

export default TimelineItem;