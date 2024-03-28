export default function Header() {
  const logo = require("../assets/BaR_logo.png");
  return (
    <nav className="desktop-nav-bar">
      <img className="logo" src={logo} alt="profile_logo" />
      <ul>
        <li>
          <a className="router" href="/">
            Home
          </a>
        </li>

        <li>
          <a className="router" href="/projects">
            Projects
          </a>
        </li>
        <li>
          <a className="router" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
