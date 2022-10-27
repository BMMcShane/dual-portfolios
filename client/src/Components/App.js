import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../StyleSheets/App.css";
// import NavBar from "./NavBar";
import About from "./About";
import Ben from "./Ben";
import Elliot from "./Elliot";
import Dashboard from "./Dashboard";

export default function App() {
  const [database, setDatabase] = useState(undefined);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((data) => {
        setDatabase(data);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<About user={user} onLogin={setUser} />} />
        { database ?
        <>
          <Route path="/Ben" element={<Ben database={database} user={user} onLogin={setUser} />} />
          <Route path="/Elliot" element={<Elliot database={database} user={user} onLogin={setUser} />} />
        </>
        : null }

        { user ?
        <Route path="/Dashboard" element={<Dashboard user={user} setUser={setUser} onLogin={setUser} />} />
        : <Route path="/Dashboard" element={null} /> }
      </Routes>
    </>
  );
}
