import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";
import { Navigate } from 'react-router-dom';
import style from "../StyleSheets/Dashboard.module.css";

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
    <div id={style.dashboard}>
      <h2>{user.name}'s Dashboard:</h2>
      <hr/>
      <ProjectList user={user} setUser={onLogin} />

      { isLeaving ?
      <Navigate to="/" />
      : null}
      <br/>
      <br/>
      <button id={style.leave} onClick={() => setIsLeaving(true)}>Return Home</button>

    </div>
    
  );
}