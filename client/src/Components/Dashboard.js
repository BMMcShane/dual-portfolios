import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";
import { Navigate } from 'react-router-dom';

export default function Dashboard({ setUser, user, onLogin }) {
  const [ isLeaving, setIsLeaving ] = useState(false);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <p>Dashboard lives here</p>
      <button onClick={() => setIsLeaving(true)}>Return Home</button>
      <ProjectList user={user} setUser={onLogin} />

      { isLeaving ?
      <Navigate to="/" />
      : null}
    </>
    
  );
}
