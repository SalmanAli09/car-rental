import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";




function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const bookBtn = () => {
    const whatsappUrl = 'whatsapp://send?phone=+923009835911';
    window.open(whatsappUrl);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            {/* <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li> */}
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            {/* <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li> */}
            {/* <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <span onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" style={{ height: "60px", width: "200px", zIndex: '-9999 !important' }} />
              {/* <h1 style={{fontSize:"16px"}}>Azadar Car Rental</h1> */}
            </span>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            {/* <li>
              {" "}
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li> */}
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            {/* <li>
              {" "}
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li> */}
            <li>
              {" "}
              {/* <Link className="contact-link" to="/contact">
                Contact
              </Link> */}
            </li>
          </ul>
          <div className="navbar__buttons">
            <div className="navbar__buttons__register" onClick={bookBtn}>
              Contact Us
            </div>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <FaBarsStaggered />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
