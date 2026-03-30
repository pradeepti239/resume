function ProfileCard({ profile }) {
  return (
    <aside className="profile-card reveal">
      <div className="avatar">PA</div>
      <h2>{profile.name}</h2>
      <p>{profile.title}</p>

      <ul className="contact-list">
        <li>
          <span>Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>

        <li>
          <span>LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedin.replace("https://", "")}
          </a>
        </li>

        <li>
          <span>Location</span>
          {profile.location}
        </li>
      </ul>
    </aside>
  );
}

export default ProfileCard;