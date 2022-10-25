import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';

export default function LoginSignUp({ user, onLogin }) {
  const [logUsername , setLogUsername ] = useState("");
  const [logPassword , setLogPassword ] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  function handleSignup(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        img_url: imageUrl,
        bio: bio,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
    setImageUrl("");
    setBio("");
  }

  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: logUsername, password: logPassword }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <h1>Sign In If You Are An Admin</h1>
      <button onClick={() => setIsLogging(true)}>Admin Login</button>
      {isLogging ? (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={logUsername}
            placeholder="Username"
            onChange={(e) => setLogUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            value={logPassword}
            placeholder="Password"
            onChange={(e) => setLogPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button type="submit">{isLoading ? "Loading..." : "Log In"}</button>
        </form>
      ) : null}

      <h1>Otherwise Make An Admin Account</h1>
      <button onClick={() => setIsCreating(true)}>Make An Account</button>
      {isCreating ? (
        <form onSubmit={handleSignup}>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            placeholder="E-mail Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            placeholder="Profile Image URL"
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <input
            rows="3"
            id="bio"
            value={bio}
            placeholder="Enter your Bio"
            onChange={(e) => setBio(e.target.value)}
          />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            placeholder="Confirm Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
          {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </form>
      ) : null}

      { user ?
      <Navigate to="/Dashboard" />
      : null}
    </>
  );
}
