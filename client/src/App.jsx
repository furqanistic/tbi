// File: client/src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import About from "@/pages/About";

/**
 * Main Application Component
 * Organized with modular components and React Router for multi-page support.
 */
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="tbi-theme">
      <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
