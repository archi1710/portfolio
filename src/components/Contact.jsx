import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_e0g9syf",
      "template_urrrvih",
      e.target,
      "AqZSC7O2XZHLJvMPN"
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch(() => {
      alert("Failed to send message");
    });

    e.target.reset();
  };

  return (
    <section id="contact">

      <h2 style={{ fontSize: "40px" }}>Contact Me</h2>

      <form
        onSubmit={sendEmail}
        style={{
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >

        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}
