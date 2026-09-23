import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Routes>

          {/* Default Route */}
          <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />

          {/* Home */}
          <Route
            path="/home"
            element={<Home />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<Home />}
          />

          {/* Skills */}
          <Route
            path="/skills"
            element={<Home />}
          />

          {/* Projects */}
          <Route
            path="/projects"
            element={<Home />}
          />

          {/* Education */}
          <Route
            path="/education"
            element={<Home />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Home />}
          />

          {/* Invalid Route */}
          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

    </BrowserRouter>
  );
}

export default App;