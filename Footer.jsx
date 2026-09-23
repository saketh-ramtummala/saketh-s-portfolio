function Footer() {

  return (

    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div>

            <h4>
              Saketh<span>.</span>
            </h4>

            <p>
              Python Full Stack Developer
            </p>

          </div>


          <div className="footer-socials">

            <a
              href="https://github.com/saketh-ramtummala"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>


            <a
              href="https://www.linkedin.com/in/saketh-ram-86807935a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>


            <a href="mailto:sakethramtummala@gmail.com">

              <i className="bi bi-envelope"></i>

            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Saketh Ram Tummala
          </span>

          <span>
            Built with React & Bootstrap
          </span>

        </div>

      </div>

    </footer>

  );
}


export default Footer;