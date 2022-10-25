import { redirect, NavLink, Link } from "react-router-dom";
import { useState } from 'react';
import LoginSignUp from './LoginSignUp';
import style from "../StyleSheets/NavBar.module.css";

export default function NavBar({ user, onLogin }) {
    const [ logging, setLogging ] = useState(false);


    function handleLogout () {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          onLogin(null);
        }
      });
    }


  return (
    <>
      <nav id={style.NavBar}>

        <div id={style.header}>
        <h1>Logo PlaceHolder</h1>
        </div>

        <div id={style.nav_btn_bar}>
        {user ?
        <div className={style.NavButtonDiv}>
        <button className={style.NavButton} onClick={handleLogout}>Log Out</button>
        </div>
        :null}

        {user ?
        <NavLink className={style.NavButtonDiv} to="/Dashboard">
          <button className={style.NavButton}>Dashboard</button>
        </NavLink>
        : null }
        
        {!logging ?
        <div className={style.NavButtonDiv}>
          <button className={style.NavButton} onClick={() => setLogging(true)} >Login/SignUp</button>
        </div>
        : null}

        {logging ?
        <>
          <LoginSignUp setLogging={setLogging} user={user} onLogin={onLogin} />
        </>
        :
        null
        }

        { !logging ?
        <>
        <NavLink className={style.NavButtonDiv} to="/">
        <button className={style.NavButton}>About</button>
        </NavLink>

        <NavLink className={style.NavButtonDiv} to="/Ben">
        <button className={style.NavButton}>Ben</button>
        </NavLink>

        <NavLink className={style.NavButtonDiv} to="/Elliot">
        <button className={style.NavButton}>Elliot</button>
        </NavLink>
        </>
        : null }
        </div>
      </nav>
    </>
  );
}
