const navItems = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["teaching", "Teaching"],
  ["education", "Education"],
  ["activities", "Activities"],
  ["contact", "Contact"],
];

function Header({ activeSection, name }) {
  return (
    <header className="topbar">
      <div className="container nav">
        <a href="#home" className="brand">
          {name}
        </a>

        <nav className="nav-links">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;