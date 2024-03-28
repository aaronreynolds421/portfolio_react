import emailjs from "emailjs-com";

export default function Contact() {
  document.body.style.backgroundColor = "#f5fcff";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_y1rb8gu", "template_jq6xcb7", e.current, {
        publicKey: "user_cRZTKcWqwVI_3ahNC",
      })
      .then(
        (res) => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-Home">
      <h1>Contact Me</h1>
      <p>I would love to hear from you!</p>
      <div className="contact-box">
        <div className="contact-left">
          <h3>Reach me</h3>
          <p>Name: Bennie Aaron Reynolds</p>
          <p>Phone: (949) 375-8230</p>
          <p>Email: benniear.reynolds@gmail.com</p>
        </div>
        <div className="contact-right">
          <h3>Send me a Message</h3>
          <form onSubmit={sendEmail}>
            <label>name</label>
            <input
              type="name"
              name="user_name"
              className="form-control"
              placeholder="Your Name Here"
            />

            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Your Email Here"
            />
            <label>Message</label>
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message Here"
            />
            <input
              type="submit"
              value="send"
              className="form-control btn btn-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
