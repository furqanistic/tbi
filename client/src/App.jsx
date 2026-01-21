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
import StudentLayout from "@/Student/components/StudentLayout";
import StudentDashboard from "@/Student/pages/StudentDashboard";
import StudentCourses from "@/Student/pages/StudentCourses";
import StudentCoursePlayer from "@/Student/pages/StudentCoursePlayer";
import StudentResults from "@/Student/pages/StudentResults";
import StudentProfile from "@/Student/pages/StudentProfile";
import StudentMockTests from "@/Student/pages/StudentMockTests";
import StudentTakeTest from "@/Student/pages/StudentTakeTest";
import StudentHelp from "@/Student/pages/StudentHelp";

// Teacher imports
import TeacherLayout from "@/Teacher/components/TeacherLayout";
import TeacherDashboard from "@/Teacher/pages/TeacherDashboard";
import TeacherCourses from "@/Teacher/pages/TeacherCourses";
import TeacherCourseEditor from "@/Teacher/pages/TeacherCourseEditor";
import TeacherMockTests from "@/Teacher/pages/TeacherMockTests";
import TeacherTestEditor from "@/Teacher/pages/TeacherTestEditor";
import TeacherStudents from "@/Teacher/pages/TeacherStudents";
import TeacherResults from "@/Teacher/pages/TeacherResults";
import TeacherProfile from "@/Teacher/pages/TeacherProfile";
import TeacherHelp from "@/Teacher/pages/TeacherHelp";

// Admin imports
import AdminLayout from "@/Admin/components/AdminLayout";
import AdminDashboard from "@/Admin/pages/AdminDashboard";
import AdminTeachers from "@/Admin/pages/AdminTeachers";
import AdminStudents from "@/Admin/pages/AdminStudents";
import AdminCourseApprovals from "@/Admin/pages/AdminCourseApprovals";
import AdminUsers from "@/Admin/pages/AdminUsers";
import AdminSettings from "@/Admin/pages/AdminSettings";

/**
 * Main Application Component
 * Organized with modular components and React Router for multi-page support.
 */
function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";
  const isDashboardPage =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/student") ||
    location.pathname.startsWith("/teacher") ||
    location.pathname.startsWith("/admin");

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
            <Route path="/student" element={<StudentLayout />}>
              <Route index element={<StudentDashboard />} />
              <Route path="courses" element={<StudentCourses />} />
              <Route
                path="courses/:courseId"
                element={<StudentCoursePlayer />}
              />
              <Route path="mocks" element={<StudentMockTests />} />
              <Route path="mocks/:testId" element={<StudentTakeTest />} />
              <Route path="results" element={<StudentResults />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route path="help" element={<StudentHelp />} />
            </Route>

            {/* Teacher Dashboard Routes */}
            <Route path="/teacher" element={<TeacherLayout />}>
              <Route index element={<TeacherDashboard />} />
              <Route path="courses" element={<TeacherCourses />} />
              <Route path="courses/new" element={<TeacherCourseEditor />} />
              <Route
                path="courses/:courseId/edit"
                element={<TeacherCourseEditor />}
              />
              <Route path="tests" element={<TeacherMockTests />} />
              <Route path="tests/new" element={<TeacherTestEditor />} />
              <Route
                path="tests/:testId/edit"
                element={<TeacherTestEditor />}
              />
              <Route path="students" element={<TeacherStudents />} />
              <Route path="results" element={<TeacherResults />} />
              <Route path="profile" element={<TeacherProfile />} />
              <Route path="help" element={<TeacherHelp />} />
            </Route>

            {/* Admin Dashboard Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="teachers" element={<AdminTeachers />} />
              <Route path="students" element={<AdminStudents />} />
              <Route path="approvals" element={<AdminCourseApprovals />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Routes>
        </main>

        {!isAuthPage && !isDashboardPage && <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default App;
