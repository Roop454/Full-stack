import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <nav className="nav">

        {/* LEFT SIDE */}
        <div className="nav-left">
          <Link to="/">Home</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
