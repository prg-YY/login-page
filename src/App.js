import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

import "./styles.css";

export default function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setEror] = useState("");

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  };

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("LoginIn");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not much");
      setEror("Details do not much");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div>
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
