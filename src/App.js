import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import ScrollToTop from "./ScrollFunction";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import AuthProvider from "./Components/Auth";
import ChatroomPage from "./pages/ChatroomPage";
import './App.css'
import MentorDashPage from "./pages/MentorDashPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/chatroom" element={<ChatroomPage />} />
            <Route path="/mentor-portal" element={<MentorDashPage />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </AuthProvider>
  );
}

export default App;
