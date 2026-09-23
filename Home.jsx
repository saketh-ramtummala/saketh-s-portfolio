import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "education",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length === 0) {
          return;
        }

        const sectionId = visibleSections[0].target.id;

        const route =
          sectionId === "home"
            ? "/home"
            : `/${sectionId}`;

        const currentPath = window.location.pathname;

        if (currentPath !== route) {
          navigate(route, {
            replace: true,
          });
        }
      },
      {
        threshold: [0.25, 0.45, 0.6, 0.75],
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navigate]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default Home;