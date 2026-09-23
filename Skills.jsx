const skills = [
  {
    name: "Python",
    category: "Programming Language",
    icon: "bi-code-square",
    level: "90%"
  },
  {
    name: "FastAPI",
    category: "Backend Framework",
    icon: "bi-server",
    level: "90%"
  },
  {
    name: "JavaScript",
    category: "Programming Language",
    icon: "bi-filetype-js",
    level: "85%"
  },
  {
    name: "React",
    category: "Frontend Library",
    icon: "bi-braces",
    level: "85%"
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    icon: "bi-filetype-html",
    level: "90%"
  },
  {
    name: "Bootstrap",
    category: "UI Framework",
    icon: "bi-bootstrap",
    level: "85%"
  }
];


function Skills() {

  return (

    <section
      id="skills"
      className="section-padding skills-section"
    >

      <div className="container">

        {/* Heading */}

        <div className="section-title">

          <p>MY TOOLKIT</p>

          <h2>
            Technical Skills
          </h2>

        </div>


        {/* Skills */}

        <div className="row g-4">

          {skills.map((skill) => (

            <div
              className="col-md-6"
              key={skill.name}
            >

              <div className="skill-card">

                {/* Icon */}

                <div className="skill-icon">

                  <i
                    className={`bi ${skill.icon}`}
                  ></i>

                </div>


                {/* Skill Information */}

                <div className="skill-info">

                  <div className="skill-header">

                    <div>

                      <h5>
                        {skill.name}
                      </h5>

                      <small>
                        {skill.category}
                      </small>

                    </div>

                    <span>
                      {skill.level}
                    </span>

                  </div>


                  {/* Progress Bar */}

                  <div className="progress">

                    <div
                      className="progress-bar"
                      style={{
                        width: skill.level
                      }}
                    ></div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}


export default Skills;