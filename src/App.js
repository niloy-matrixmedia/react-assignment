import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import ProtectedRoute from './context/ProtectedRoute';
import ViewProfile from "./pages/profile/ViewProfile";
import EditProfile from "./pages/profile/EditProfile";
import Viewdashboard from "./pages/dashboard/Viewdashboard";
import Update from "./pages/actionspages/Update";
import Details from "./pages/actionspages/Details";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<ProtectedRoute><Login /></ProtectedRoute>} />
            <Route path="/register" element={<ProtectedRoute><Signup /></ProtectedRoute>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/view" element={<ViewProfile />} />
            <Route path="/update-profile" element={<EditProfile />} />
            <Route path="/view-dashboard" element={<Viewdashboard />} />
            <Route path="/edit/:id" element={<Update />} />
            <Route path="/view/:id" element={<Details />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;