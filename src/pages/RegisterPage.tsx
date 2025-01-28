import React, { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registered:", form);
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        name="name"
        placeholder="Name"
        className="block mb-2 p-2"
        onChange={handleChange}
      />
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
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
