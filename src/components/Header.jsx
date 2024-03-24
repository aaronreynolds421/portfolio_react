export default function Header() {
  const logo = require("../assets/BaR_logo.png");
  return (
    <nav className="desktop-nav-bar">
      <img class="logo" src={logo} alt="profile_logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
