"use client"


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

// Custom arrow component for next button
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

const ContentSlider = () => {
  var settings = {

    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <div className="slider-container mx-10 lg:mx-auto lg:max-w-4xl xl:max-w-7xl my-20">
      <Slider {...settings}>

      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/gd.png" alt="" />
    </div>
    <div>
      <h3>Graphic &amp; Multimedia</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/wd.png" alt="" />
    </div>
    <div>
    <h3>Web &amp; Software</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/dm.png" alt="" />
    </div>
    <div>
    <h3>Digital Marketing</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/cy.png" alt="" />
    </div>
    <div>
    <h3>Cyber Security</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/net.png" alt="" />
    </div>
    <div>
    <h3>Networking Technology</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/ve.png" alt="" />
    </div>
    <div>
    <h3>Film &amp; Media</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/lg.png" alt="" />
    </div>
    <div>
    <h3>English Language</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/robot.png" alt="" />
    </div>
    <div>
    <h3>Robotics &amp; Automation</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/aws.png" alt="" />
    </div>
    <div>
    <h3>Cloud Computing</h3>
    </div>
  </div>
</div>

      </Slider>
    </div>
  );
};

export default ContentSlider;