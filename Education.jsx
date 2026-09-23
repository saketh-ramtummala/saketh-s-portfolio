function Education() {

  return (

    <section
      id="education"
      className="section-padding education-section"
    >

      <div className="container">

        {/* Heading */}

        <div className="section-title">

          <p>MY ACADEMIC JOURNEY</p>

          <h2>
            Education
          </h2>

        </div>


        <div className="timeline">

          {/* B.Tech */}

          <div className="timeline-item">

            <div className="timeline-icon">

              <i className="bi bi-mortarboard-fill"></i>

            </div>


            <div className="timeline-content">

              <span>
                B.TECH
              </span>

              <h4>
                Computer Science & Engineering — Core
              </h4>

              <h6>
                VIT Vellore, Tamil Nadu
              </h6>

              <p>
                Bachelor of Technology in Computer Science
                and Engineering (Core).
              </p>

            </div>

          </div>


          {/* Intermediate */}

          <div className="timeline-item">

            <div className="timeline-icon">

              <i className="bi bi-book"></i>

            </div>


            <div className="timeline-content">

              <span>
                INTERMEDIATE
              </span>

              <h4>
                FIITJEE
              </h4>

              <h6>
                Vijayawada, Andhra Pradesh
              </h6>

              <p>
                Higher secondary education with a strong
                technical and analytical foundation.
              </p>

            </div>

          </div>


          {/* School */}

          <div className="timeline-item">

            <div className="timeline-icon">

              <i className="bi bi-building"></i>

            </div>


            <div className="timeline-content">

              <span>
                SCHOOLING
              </span>

              <h4>
                Oxford Public School
              </h4>

              <h6>
                Guntur, Andhra Pradesh
              </h6>

              <p>
                School education and academic foundation.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}


export default Education;