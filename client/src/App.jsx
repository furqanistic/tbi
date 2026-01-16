// File: client/src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop"; // Import ScrollToTop
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import CoursePayment from "@/pages/CoursePayment";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Resources from "@/pages/Resources";
import Faculty from "@/pages/Faculty";
import Auth from "@/pages/Auth";
import StudentLayout from "@/components/dashboard/StudentLayout";
import StudentDashboard from "@/pages/dashboard/StudentDashboard";
import StudentCourses from "@/pages/dashboard/StudentCourses";
import StudentCoursePlayer from "@/pages/dashboard/StudentCoursePlayer";

/**
 * Main Application Component
 * Organized with modular components and React Router for multi-page support.
 */
function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";
  const isDashboardPage = location.pathname.startsWith("/dashboard");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="tbi-theme">
      <ScrollToTop /> {/* Reset scroll on route change */}
      <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
        {!isDashboardPage && <Navbar />}

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route
              path="/courses/:courseId/payment"
              element={<CoursePayment />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/auth" element={<Auth />} />

            {/* Student Dashboard Routes */}
            <Route path="/dashboard/student" element={<StudentLayout />}>
              <Route index element={<StudentDashboard />} />
              <Route path="courses" element={<StudentCourses />} />
              <Route
                path="courses/:courseId"
                element={<StudentCoursePlayer />}
              />
              <Route path="mocks" element={<div>Mocks Page</div>} />
              <Route path="results" element={<div>Results Page</div>} />
              <Route path="profile" element={<div>Profile Page</div>} />
            </Route>
          </Routes>
        </main>

        {!isAuthPage && !isDashboardPage && <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default App;
