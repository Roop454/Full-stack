import { useState } from "react";

function App() {
  // Button state
  const [clicked, setClicked] = useState(false);

  // Time-based greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" :
    hour < 18 ? "Good Afternoon" :
    "Good Evening";

  return (
    <div className="container mt-4">

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark mb-4">
        <span className="navbar-brand">
          <b><i><u>Bootstrap UI Experiment</u></i></b>
        </span>
      </nav>

      {/* Card */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{greeting}</h5>

          <p className="card-text">
            This user interface is developed using Bootstrap components integrated with React to create a responsive single-page application.
          </p>

          <button
            className={`btn ${clicked ? "btn-success" : "btn-primary"}`}
            onClick={() => setClicked(true)}
          >
            {clicked ? "Clicked!" : "Click Me"}
          </button>

          {clicked && (
            <p className="mt-3 text-success fw-bold">
              Button interaction successful 🎉
            </p>
          )}
        </div>
      </div>

      {/* Login Form */}
      <h4>Login Form</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => alert("Login Submitted Successfully!")}
        >
          Submit
        </button>
      </form>

    </div>
  );
}

export default App;
