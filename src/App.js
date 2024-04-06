// App.js

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from ".";
import { Toaster } from "react-hot-toast";
import EmployeeInfoForm from "./components/EmployeeCreateInfo";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const { setUser, setIsAuthenticated, isAuthenticated, setLoading } =
    useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/teams/getTeam`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch(() => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, [isAuthenticated]);

  return (
    <div className="bg-gray-50">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </Router>
      <EmployeeInfoForm />
    </div>
  );
};

export default App;
