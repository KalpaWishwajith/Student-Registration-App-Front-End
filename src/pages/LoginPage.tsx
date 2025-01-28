import React, { useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logged In:", form);
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        name="email"
        placeholder="Email"
        className="block mb-2 p-2"
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Password"
        className="block mb-2 p-2"
        type="password"
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
