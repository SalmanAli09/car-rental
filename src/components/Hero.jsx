import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/Hero1.png";
import { useEffect, useState } from "react";
import {Modal} from  'antd'
import Work1 from '../images/Work/work1.jpg'
import Work2 from '../images/Work/work2.jpg'
import Work3 from '../images/Work/work3.jpg'
function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  // const bookBtn = () => {
  //   document
  //     .querySelector("#booking-section")
  //     .scrollIntoView({ behavior: "smooth" });
  // };

  const bookBtn = () => {
    const whatsappUrl = 'whatsapp://send?phone=+923009835911';
    window.open(whatsappUrl);
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
     <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  footer={false}  width={1000} style={{zIndex:"999999999 !important"}} centered={true}>
        <p style={{fontSize:"45px", padding:"20px"}}>Work done by <span style={{color:"#E73F2C", fontWeight:"bolder"}}>Azadar Car Rental</span></p>
        <hr />
        <br />
        <div style={{display:"flex" , flexWrap:"wrap", justifyContent:"space-between"}}>
          <div>
            <img src={Work1} alt="" style={{height:"300px", width:"300px"}} />
          </div>
          <div>
            <img src={Work2} alt="" style={{height:"300px", width:"300px"}} />
          </div>
          <div>
            <img src={Work3} alt="" style={{height:"300px", width:"300px"}} />
          </div>
        </div>
      </Modal>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns">
                <div
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride fw-bolder"
                  style={{color:"white", cursor:"pointer"}}
                >
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="hero-content__text__btns__learn-more" style={{backgroundColor:"white !important", cursor:"pointer"}} onClick={showModal}>
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>

            {/* img */}
            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
