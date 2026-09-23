function Projects() {

  return (

    <section
      id="projects"
      className="section-padding"
    >

      <div className="container">

        {/* Heading */}

        <div className="section-title">

          <p>MY WORK</p>

          <h2>
            Projects
          </h2>

        </div>


        {/* Project Card */}

        <div className="project-card">

          {/* Project Number */}

          <div className="project-number">
            01
          </div>


          {/* Project Content */}

          <div className="project-content">

            <span className="project-label">
              FEATURED PROJECT
            </span>

            <h3>
              Skill Exchange
            </h3>

            <p>
              A platform where users can exchange skills,
              share knowledge and learn from each other.
              The project focuses on creating a useful
              community-driven learning experience.
            </p>


            {/* Technologies */}

            <div className="project-technologies">

              <span>Python</span>

              <span>FastAPI</span>

              <span>React</span>

              <span>Bootstrap</span>

              <span>JavaScript</span>

            </div>


            {/* Buttons */}

            <div className="project-buttons">

              <a
                href="https://github.com/saketh-ramtummala"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-custom"
              >

                <i className="bi bi-github me-2"></i>

                View Code

              </a>

            </div>

          </div>


          {/* Project Visual */}

          <div className="project-visual">

            <i className="bi bi-arrow-left-right"></i>

            <h4>
              Learn.
              <br />
              Teach.
              <br />
              Grow.
            </h4>

          </div>

        </div>

      </div>

    </section>

  );
}


export default Projects;