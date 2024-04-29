function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Azadar Car Rental</span> 
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; 0300-9835911 | 0345-4535611
                </a>
              </li>

              <li>
                <a
                //   href="mailto: 
                // carrental@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; rajanigah4535611@gmail.com
                </a>
              </li>

              {/* <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://jephunneh.com/"
                >
                  Design by cjephuneh
                </a>
              </li> */}
            </ul>

            <ul className="footer-content__2">
              <li>Quick Links</li>
              <li>
                <a href="#home">0345-4535611</a>
              </li>
              <li>
                <a href="#home">0300-9835911</a>
              </li> 
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Sun: 24 Hours</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
