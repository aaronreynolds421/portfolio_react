export default function Home() {
  const resume = require("../assets/Bennie_Resume.pdf");
  const pflPic = require("../assets/bennie-reynolds-pic.png");
  const Exp = require("../assets/experience.png");
  const Edu = require("../assets/education.png");
  return (
    <div class="section_text">
      <p class="section_text_p1">Hello, I'm</p>
      <h1 class="title">Bennie Reynolds</h1>
      <p class="section_text_p2">Front End Developer</p>
      <div class="btn-container">
        <div>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            {/*without this, there is a security risk in older browsers*/}
            <button class="btn btn-color-1" src={resume} alt="resume">
              Download Resume
            </button>
          </a>
        </div>
        <section id="about">
          <p class="section_text_p1">Get to Know More</p>
          <h1 class="title">About Me</h1>
          <div class="section_container">
            <div class="section_pic-container">
              <img src={pflPic} alt="Profile" class="about-pic" />
            </div>
            <div class="about-detail-container">
              <div class="details-container">
                <p>
                  Motivated Marine Corps veteran pursuing a career in front-end
                  development, combining disciplined military training with a
                  passion for coding. Proficient in HTML, CSS, and JavaScript,
                  with a keen eye for user experiences. Experienced in
                  collaborating effectively within teams to achieve objectives
                  and solve complex problems. Eager to leverage technical skills
                  and leadership abilities to contribute to innovative projects
                  in the tech industry.
                </p>
              </div>
              <div class="about-containers">
                <div class="details-container">
                  <img src={Exp} alt="Experience Icon" class="icon" />
                  <h3>Experience</h3>
                  <p>
                    1 year <br />
                    FrontEnd Development
                  </p>
                </div>
                <div class="details-container">
                  <img src={Edu} alt="Experience Icon" class="icon" />
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
      </div>
    </div>
  );
}
