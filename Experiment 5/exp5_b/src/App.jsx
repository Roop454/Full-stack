import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

/* ✅ Lazy Imports */
const Home = lazy(() =>
  new Promise(resolve =>
    setTimeout(() => resolve(import("./components/Home")), 3000)
  )
);
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>✨ Client side React Router SPA ✨</h1>

        {/* Navigation */}
        <nav className="nav">
          <Link to="/" className="btn">Home</Link>
          <Link to="/about" className="btn">About</Link>
          <Link to="/contact" className="btn">Contact</Link>
        </nav>

        {/* ✅ Suspense Wrapper for Lazy Loading */}
        <Suspense fallback={<h2 style={{color:"#00ffff"}}>Loading Page...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

      </div>
    </BrowserRouter>
  );
}

export default App;
