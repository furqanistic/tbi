// File: client/src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";

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
            {/* Add more routes here as needed, e.g., <Route path="/about" element={<About />} /> */}
          </Routes>
        </main>

      </div>
    </ThemeProvider>
  );
}

export default App;
