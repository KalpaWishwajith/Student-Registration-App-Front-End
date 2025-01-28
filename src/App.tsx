import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import EnrollPage from "./pages/EnrollPage";
import RegisteredCoursesPage from "./pages/RegisteredCoursesPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/enroll" component={EnrollPage} />
        <Route path="/registered-courses" component={RegisteredCoursesPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  );
}

export default App;
