import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import StudentDashboardPage from "./pages/StudentDashboardPage.tsx";
import CourseEnrollPage from "./pages/CourseEnrollPage.tsx";
import RegisteredCoursesPage from "./pages/RegisteredCoursesPage.tsx";
import AdminDashboardPage from "./pages/AdminDashboardPage.tsx";
import Layout from "./components/Layout.tsx";
import { AuthProvider, useAuth } from "./providers/AuthContext.tsx";
import AdminLoginPage from "./pages/AdminLoginPage.tsx";
import CoursesPage from "./pages/CoursesPage.tsx";
import StudentCoursesPage from "./pages/StudentCoursesPage.tsx";
import StudentsPage from "./pages/StudentsPage.tsx";

// Role-based Protected Route Component
const ProtectedRoute = ({
  element,
  allowedRoles,
}: {
  element: JSX.Element;
  allowedRoles: string[];
}) => {
  const { user } = useAuth(); // Get user role from AuthContext

  if (!user) {
    return <Navigate to="/" replace />; // Redirect if not logged in
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />; // Redirect if role is not allowed
  }

  return element;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Routes accessible to everyone */}
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />

            {/* Student-only routes */}
            <Route
              path="/student-dashboard"
              element={
                <ProtectedRoute
                  element={<StudentDashboardPage />}
                  allowedRoles={["student"]}
                />
              }
            />
            <Route
              path="/course-enroll"
              element={
                <ProtectedRoute
                  element={<CourseEnrollPage />}
                  allowedRoles={["student"]}
                />
              }
            />
            <Route
              path="/registered-courses"
              element={
                <ProtectedRoute
                  element={<RegisteredCoursesPage />}
                  allowedRoles={["student"]}
                />
              }
            />

            {/* Admin-only routes */}
            <Route
              path="/students"
              element={
                <ProtectedRoute
                  element={<StudentsPage />}
                  allowedRoles={["admin"]}
                />
              }
            />
            <Route
              path="/courses"
              element={
                <ProtectedRoute
                  element={<CoursesPage />}
                  allowedRoles={["admin"]}
                />
              }
            />
            <Route
              path="/student-courses"
              element={
                <ProtectedRoute
                  element={<StudentCoursesPage />}
                  allowedRoles={["admin"]}
                />
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute
                  element={<AdminDashboardPage />}
                  allowedRoles={["admin"]}
                />
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
