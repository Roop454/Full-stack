import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>✨ Client side React Router SPA ✨</h1>

        <nav className="nav">
          <Link to="/" className="btn">Home</Link>
          <Link to="/about" className="btn">About</Link>
          <Link to="/contact" className="btn">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
