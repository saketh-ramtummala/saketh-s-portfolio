function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const subject = form.elements.subject.value.trim();
    const message = form.elements.message.value.trim();

    const mailSubject = subject || `Portfolio enquiry from ${name}`;
    const mailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:sakethramtummala@gmail.com?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container contact-container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-3">
            <div className="contact-intro-panel">
              <div className="contact-eyebrow">
                <span>GET IN TOUCH</span>
                <span className="contact-eyebrow-line"></span>
              </div>

              <h2 className="contact-main-title">
                Let’s build
                <span>something</span>
                together.
              </h2>

              <p className="contact-main-description">
                Feel free to reach out for opportunities, collaborations or
                just to say hello. I&apos;m always open to meaningful
                conversations.
              </p>

              <div className="contact-stats">
                <div className="contact-stat">
                  <strong>24/7</strong>
                  <span>Response Time</span>
                </div>

                <div className="contact-stat">
                  <strong>100%</strong>
                  <span>Open to Opportunities</span>
                </div>

                <div className="contact-stat">
                  <strong>∞</strong>
                  <span>Let&apos;s Create</span>
                </div>
              </div>

              <div className="contact-quote">
                <span className="contact-quote-mark">“</span>
                <p>
                  Great ideas start with a simple conversation.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="contact-methods-panel">
              <a
                href="mailto:sakethramtummala@gmail.com"
                className="contact-method-card"
              >
                <div className="contact-method-icon email-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>

                <div className="contact-method-content">
                  <span className="contact-method-label">Email</span>
                  <strong>sakethramtummala@gmail.com</strong>
                  <small>Drop me an email anytime</small>
                </div>

                <span className="contact-method-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>

              <a
                href="tel:+916301549680"
                className="contact-method-card"
              >
                <div className="contact-method-icon phone-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <div className="contact-method-content">
                  <span className="contact-method-label">Phone</span>
                  <strong>+91 63015 497680</strong>
                  <small>Call or WhatsApp</small>
                </div>

                <span className="contact-method-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/saketh-ram-86807935a/"
                target="_blank"
                rel="noreferrer"
                className="contact-method-card"
              >
                <div className="contact-method-icon linkedin-icon">
                  <i className="bi bi-linkedin"></i>
                </div>

                <div className="contact-method-content">
                  <span className="contact-method-label">LinkedIn</span>
                  <strong>Connect with me</strong>
                  <small>Let&apos;s grow together</small>
                </div>

                <span className="contact-method-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>

              <a
                href="https://github.com/saketh-ramtummala"
                target="_blank"
                rel="noreferrer"
                className="contact-method-card"
              >
                <div className="contact-method-icon github-icon">
                  <i className="bi bi-github"></i>
                </div>

                <div className="contact-method-content">
                  <span className="contact-method-label">GitHub</span>
                  <strong>View my repositories</strong>
                  <small>Check out my work</small>
                </div>

                <span className="contact-method-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="contact-form-panel">
              <div className="contact-form-heading">
                <div className="contact-form-heading-icon">
                  <i className="bi bi-send-fill"></i>
                </div>

                <div>
                  <h3>Send a Message</h3>
                  <p>I&apos;ll get back to you as soon as possible!</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="contact-name" className="form-label">
                      Your Name
                    </label>
                    <div className="contact-input-wrap">
                      <i className="bi bi-person"></i>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-email" className="form-label">
                      Your Email
                    </label>
                    <div className="contact-input-wrap">
                      <i className="bi bi-envelope"></i>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact-subject" className="form-label">
                      Subject
                    </label>
                    <div className="contact-input-wrap">
                      <i className="bi bi-file-earmark-text"></i>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        className="form-control"
                        placeholder="What’s this about?"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact-message" className="form-label">
                      Message
                    </label>
                    <div className="contact-input-wrap contact-textarea-wrap">
                      <i className="bi bi-chat-square-text"></i>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-control"
                        placeholder="Write your message here..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary-custom contact-submit-button"
                    >
                      <i className="bi bi-send-fill"></i>
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </form>

              <div className="contact-privacy-note">
                <i className="bi bi-lock-fill"></i>
                <span>Your information is safe with me. I’ll never share it with anyone.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
