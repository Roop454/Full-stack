import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      message: "",
    });
    setSubmitted(false);
  };

  // Password Strength Logic
  const getPasswordStrength = () => {
    const pass = formData.password;

    if (pass.length === 0) return "";

    if (pass.length < 5) return "Weak 🔴";
    if (pass.length < 8) return "Medium 🟡";

    return "Strong 🟢";
  };

  return (
    <div className="container">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <h1 className="title">✨ Experiment 6_A ✨</h1>
        <div className="subtitle">Controlled Form with Validation</div>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="👤 Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="📧 Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="🔒 Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="strength">
            {getPasswordStrength()}
          </div>

          <textarea
            name="message"
            placeholder="💬 Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            🚀 Submit
          </motion.button>

        </form>

        {/* Show result + reset ONLY after submit */}
        {submitted && (
          <>
            <motion.div
              className="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3>✅ Submitted Data</h3>
              <p><b>Name:</b> {formData.name}</p>
              <p><b>Email:</b> {formData.email}</p>
              <p><b>Password:</b> {formData.password}</p>
              <p><b>Message:</b> {formData.message}</p>
            </motion.div>

            <motion.button
              type="button"
              className="resetBtn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleReset}
            >
              🔄 Reset Form
            </motion.button>
          </>
        )}

      </motion.div>
    </div>
  );
}

<motion.button
  style={{ width: "100%" }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  type="submit"
>
  🚀 Submit
</motion.button>