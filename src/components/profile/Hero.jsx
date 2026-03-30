import ProfileCard from "./ProfileCard";

function Hero({ profile }) {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-card reveal">
          <div className="eyebrow">
            Computer Science Graduate Student • Data & Software
          </div>

          <h1>
            Hi, I’m <span>Pradeepti</span>
          </h1>

          <p>{profile.summary}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#experience">
              View Experience
            </a>
            <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
              Contact Me
            </a>
          </div>

          <div className="quick-info">
            {profile.quickInfo.map((item) => (
              <div className="pill" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <ProfileCard profile={profile} />
      </div>
    </section>
  );
}

export default Hero;