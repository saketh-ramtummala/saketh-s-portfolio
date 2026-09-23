import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    const section = path === "/home" ? "home" : path.substring(1);

    if (location.pathname === path) {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });

      return;
    }

    navigate(path);

    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <button
          type="button"
          className="navbar-brand"
          onClick={() => handleNavigation("/home")}
          aria-label="Go to home"
        >
          <span className="logo-first-name">SAKETH RAM</span>
          <span className="logo-separator">|</span>
          <span className="logo-last-name">TUMMALA</span>
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                type="button"
                className={`nav-link ${isActive("/home") ? "active" : ""}`}
                onClick={() => handleNavigation("/home")}
              >
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                onClick={() => handleNavigation("/about")}
              >
                About
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className={`nav-link ${isActive("/skills") ? "active" : ""}`}
                onClick={() => handleNavigation("/skills")}
              >
                Skills
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className={`nav-link ${isActive("/projects") ? "active" : ""}`}
                onClick={() => handleNavigation("/projects")}
              >
                Projects
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className={`nav-link ${isActive("/education") ? "active" : ""}`}
                onClick={() => handleNavigation("/education")}
              >
                Education
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                onClick={() => handleNavigation("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
