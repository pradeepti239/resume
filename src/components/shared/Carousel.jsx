import { useCarousel } from "../../hooks/useCarousel";

function Carousel({ images, altPrefix }) {
  const { currentIndex, goNext, goPrev, goTo } = useCarousel(images.length);

  function getSlideClass(index) {
    if (index === currentIndex) return "carousel-slide is-active";
    if (index === (currentIndex - 1 + images.length) % images.length) {
      return "carousel-slide is-prev";
    }
    if (index === (currentIndex + 1) % images.length) {
      return "carousel-slide is-next";
    }
    return "carousel-slide";
  }

  return (
    <div className="carousel" aria-label={`${altPrefix} image carousel`}>
      <button className="carousel-btn prev" aria-label="Previous slide" onClick={goPrev}>
        &#10094;
      </button>

      <div className="carousel-track">
        {images.map((src, index) => (
          <div className={getSlideClass(index)} key={`${src}-${index}`}>
            <div className="carousel-card real-photo">
              <img src={src} alt={`${altPrefix} ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn next" aria-label="Next slide" onClick={goNext}>
        &#10095;
      </button>

      <div className="carousel-dots" aria-label="Carousel navigation">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "is-active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;