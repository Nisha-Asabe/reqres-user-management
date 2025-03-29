import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";

const App = () => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/users"
          element={isAuthenticated ? <Users /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-user/:id"
          element={isAuthenticated ? <EditUser /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
