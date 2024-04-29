import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";
import { useState } from "react";
import {Modal} from 'antd'

function Home() {
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
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  footer={false}  width={1000}>
        <p>
          At Azadar Car Rental, we specialize in offering the latest models and top-notch cars, ensuring an exceptional experience for our clients. With a wealth of experience serving both national and international customers in the breathtaking Northern areas of Pakistan, we take pride in providing unparalleled service at the most reasonable rates. Whether you're planning a scenic road trip or exploring the majestic landscapes, our fleet of premium vehicles awaits you. Simply click on the number 123213213 to reserve your dream car and embark on an unforgettable journey with Azadar Car Rental.
        </p>
      </Modal>
      <Hero />
      {/* <BookCar /> */}
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      {/* <Download /> */}
      <Footer />
    </>
  );
}

export default Home;
