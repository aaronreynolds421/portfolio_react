export default function Home() {
  const resume = require("../assets/Bennie_Reynolds-Resume.pdf");
  const pflPic = require("../assets/bennie-reynolds-pic.png");
  const Exp = require("../assets/experience.png");
  const Edu = require("../assets/education.png");
  const linkD = require("../assets/linkedin.png");
  const gitH = require("../assets/github.png");
  return (
    <section className="section_text">
      <p className="section_text_p1">Hello, I'm</p>
      <h1 className="title">Bennie Reynolds</h1>
      <p className="section_text_p2">Front End Developer</p>
      <div className="button-container">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="resume">
          {/*without this, there is a security risk in older browsers*/}
          <button className="button btn-color-1" src={resume} alt="resume">
            Download Resume
          </button>
        </a>
      </div>
      <div classname="links">
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
      <div className="section_pic-container">
        <img src={pflPic} alt="Profile" className="about-pic" />
      </div>
      <section id="about">
        <p className="section_text_p1">Get to Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section_container">
          <div className="about-detail-container">
            <div className="details-container">
              <p>
                Motivated Marine Corps veteran pursuing a career in front-end
                development, combining disciplined military training with a
                passion for coding. Proficient in HTML, CSS, and JavaScript,
                with a keen eye for user experiences. Experienced in
                collaborating effectively within teams to achieve objectives and
                solve complex problems. Eager to leverage technical skills and
                leadership abilities to contribute to innovative projects in the
                tech industry.
              </p>
            </div>
            <div className="about-containers">
              <div className="details-container">
                <img src={Exp} alt="Experience Icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  1 year <br />
                  FrontEnd Development
                </p>
              </div>
              <div className="details-container">
                <img src={Edu} alt="Experience Icon" className="icon" />
                <h3>Education</h3>
                <p>
                  Associates Degree <br />
                  Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
