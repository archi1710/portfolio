import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {

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
    <section
      id="contact"
      className="section"
    >

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </motion.form>

    </section>
  );
}

export default Contact;