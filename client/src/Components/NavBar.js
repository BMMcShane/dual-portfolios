import { redirect, NavLink, Link } from "react-router-dom";
import { useState } from 'react';
import LoginSignUp from './LoginSignUp';

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
      {/* <h1>Navbar Goes Here</h1> */}
      <nav>

        {user ?
        <button onClick={handleLogout}>Log Out</button>
        :null}

        {user ?
        <NavLink to="/Dashboard">Dashboard</NavLink>
        :
        <button onClick={() => setLogging(true)} >Login/SignUp</button>
        }

        {logging ?
        <LoginSignUp user={user} onLogin={onLogin} />
        :
        null
        }

        <NavLink to="/">About</NavLink>

        <NavLink to="/Ben">Ben</NavLink>

        <NavLink to="/Elliot">Elliot</NavLink>
      </nav>
    </>
  );
}
