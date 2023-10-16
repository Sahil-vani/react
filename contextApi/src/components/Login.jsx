import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex items-center justify-center text-white bg-blue-600 w-1/2 h-screen flex-col">
      <h2 className="m-5 p-3 text-2xl font-bold text-black rounded-xl">
        Login
      </h2>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Username"
        className="m-5 p-3 w-36 h-auto text-black"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
        className="m-5 p-3 w-36 h-auto text-black "
      />
      <button
        onClick={handleSubmit}
        className="m-5 p-3 text-xl bg-black rounded-xl"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
