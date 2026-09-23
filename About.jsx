function About() {
  return (
    <section id="about" className="section-padding">

      <div className="container">

        {/* Section Heading */}
        <div className="section-title">

          <p>GET TO KNOW ME</p>

          <h2>About Me</h2>

        </div>


        <div className="row align-items-center g-5">

          {/* LEFT SIDE */}
          <div className="col-lg-7">

            <div className="about-content">

              <p>
                I'm <strong>Saketh Ram Tummala</strong>, a Computer
                Science and Engineering student at
                <strong> VIT Vellore</strong>, passionate about
                Python Full Stack Development.
              </p>

              <p>
                I enjoy building modern web applications and
                scalable backend systems using Python, FastAPI,
                React and other modern web technologies.
              </p>

              <p>
                I'm particularly interested in backend development,
                API development and creating responsive user
                interfaces using modern frontend technologies.
              </p>

              <p>
                I believe in continuous learning and enjoy
                working on real-world projects that allow me to
                improve my technical and problem-solving skills.
              </p>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="col-lg-5">

            <div className="about-cards">

              {/* Card 1 */}
              <div className="about-card">

                <i className="bi bi-code-slash"></i>

                <h5>
                  Backend Developer
                </h5>

                <p>
                  Python & FastAPI
                </p>

              </div>


              {/* Card 2 */}
              <div className="about-card">

                <i className="bi bi-window"></i>

                <h5>
                  Frontend Developer
                </h5>

                <p>
                  React & Bootstrap
                </p>

              </div>


              {/* Card 3 */}
              <div className="about-card">

                <i className="bi bi-lightbulb"></i>

                <h5>
                  Problem Solver
                </h5>

                <p>
                  Analytical Thinking
                </p>

              </div>


              {/* Card 4 */}
              <div className="about-card">

                <i className="bi bi-graph-up-arrow"></i>

                <h5>
                  Continuous Learner
                </h5>

                <p>
                  Always Improving
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;