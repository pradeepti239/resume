function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {name}. Built as a React personal website.
        </p>
      </div>
    </footer>
  );
}

export default Footer;