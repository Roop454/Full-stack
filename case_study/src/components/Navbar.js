import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">

        {/* BRAND NAME */}
        <Link className="navbar-brand brand-title" to="/">
          PARKASH <span>ENGG. WORKS</span>
        </Link>

        {/* NAV BUTTONS */}
        <div>
          <Link to="/products" className="me-2 text-decoration-none">
            <Button variant="contained">Products</Button>
          </Link>

          <Link to="/services" className="me-2 text-decoration-none">
            <Button variant="outlined">Services</Button>
          </Link>

          <Link to="/contact" className="text-decoration-none">
            <Button variant="contained" color="success">
              Contact
            </Button>
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
