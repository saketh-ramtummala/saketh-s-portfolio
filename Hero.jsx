import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");

    setTimeout(() => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <section id="home" className="hero-section">

      {/* ================= BACKGROUND ================= */}

      <div className="hero-background">
        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
      </div>

      {/* ================= HERO CONTENT ================= */}

      <div className="container hero-container">

        <div className="row align-items-center">

          {/* ================= LEFT CONTENT ================= */}

          <div className="col-lg-7">

            <div className="hero-content">

              <div className="hero-intro">
                <span className="intro-line"></span>
                <span>HELLO, I'M</span>
              </div>

              <h1 className="hero-title">
                SAKETH RAM
                <span>TUMMALA</span>
              </h1>

              <h2 className="hero-role">
                Python Full Stack Developer
              </h2>

              <p className="hero-description">
                I build modern web applications and scalable
                backend systems using Python, FastAPI, React
                and other modern web technologies.
              </p>

              {/* ================= BUTTONS ================= */}

              <div className="hero-buttons">

                <button
                  type="button"
                  onClick={handleContactClick}
                  className="btn btn-primary-custom"
                >
                  Get In Touch
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </button>

                <a
                  href="https://github.com/saketh-ramtummala"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-custom"
                >
                  <i className="bi bi-github me-2"></i>
                  GitHub
                </a>

              </div>

              {/* ================= SOCIAL LINKS ================= */}

              <div className="hero-socials">

                <a
                  href="https://www.linkedin.com/in/saketh-ram-86807935a/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="https://github.com/saketh-ramtummala"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="mailto:sakethramtummala@gmail.com"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope"></i>
                </a>

              </div>

            </div>

          </div>

          {/* ================= RIGHT PROFILE ================= */}

          <div className="col-lg-5">

            <div className="profile-wrapper">

              <div className="profile-ring profile-ring-one"></div>

              <div className="profile-ring profile-ring-two"></div>

              <div className="profile-card">

                <div className="profile-card-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="profile-image-container">

                  <img
                    src="/saketh-profile.png"
                    alt="Saketh Ram Tummala"
                    className="profile-image"
                  />

                </div>

              </div>

              {/* ================= PROFILE BADGE ================= */}

              <div className="profile-badge">

                <div className="badge-icon">
                  <i className="bi bi-code-slash"></i>
                </div>

                <div>
                  <small>FOCUS</small>
                  <strong>Full Stack</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;