export default function Contact() {
  document.body.style.backgroundColor = "#f5fcff";
  return (
    <>
      <div className="Contact-Home">
        <h1>Contact Me</h1>
        <p>I would love to hear from you!</p>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Reach me</h3>
            <p>Name: Bennie Reynolds</p>
            <p>Phone: 949-375-8230</p>
            <p>Email: benniear.reynolds@gmail.com</p>
          </div>
          <div className="contact-right">
            <h3>Send me a Message</h3>
            <form>
              <div className="in-row">
                <div className="in-grp">
                  <label>
                    <input type="text" placeholder="Your Name"></input>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
