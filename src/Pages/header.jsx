import About from "../Component/About";
import Home from "../Component/Home";
import { Link, Routes, Route } from "react-router-dom";
import Services from "../Component/Services";
import Contact from "../Component/Contact";

function Header() {
  return (
    <div>
      <header className="header bg-dark">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <nav className="nav">
          <ul className="nav-list ">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/services"> Services </Link>
            </li>
            <li>
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>
        </nav>
        <div className="call-button">
          <button className="btn-call">Call</button>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Header;
