import myphoto from "../assets/myphoto.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <h1 className="hero-title">
          Archita
          Rana
        </h1>

        <div className="hero-left">

          <h2 className="typing-text">
            Frontend Developer
          </h2>

          <p>
            BTech Computer Engineering Student
          </p>

        </div>

        <div className="hero-buttons">

          <a href="/resume.pdf" download>
  <button className="hero-btn">
    Download Resume
  </button>
</a>

  <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  >
  <button className="hero-btn">
    View Resume
  </button>
   </a>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={myphoto}
          alt="Archita"
          className="profile-img"
        />

      </div>

    </section>
  );
}

export default Hero;