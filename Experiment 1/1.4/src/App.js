import { useState } from "react";
import "./App.css";

function App() {
  // Step 2: Store input using state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <h2>Simple Form SPA</h2>

      {/* Step 1: Create form fields */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={formData.course}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {/* Step 3: Display submitted data */}
      {submittedData && (
        <div className="output">
          <h3>Submitted Data</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Course:</b> {submittedData.course}</p>
        </div>
      )}
    </div>
  );
}

export default App;
