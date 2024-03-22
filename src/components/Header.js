export default function Header() {
  const logo = require("../assets/BaR_logo.png");
  const linkD = require("../assets/linkedin.png");
  const gitH = require("../assets/github.png");

  return (
    <nav className="nav-bar">
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
      <div>
        <a
          href="https://www.linkedin.com/in/bennie-reynolds-529818175/"
          target="_blank"
          rel="noopener noreferrer">
          <img className="linkD" src={linkD} alt="linkedIn_logo" />
        </a>
        <a
          href="https://github.com/aaronreynolds421"
          target="_blank"
          rel="noopener noreferrer">
          <img className="gitH" src={gitH} alt="gitHub_logo" />
        </a>
      </div>
    </nav>
  );
}
