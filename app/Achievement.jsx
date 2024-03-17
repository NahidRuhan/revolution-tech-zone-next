"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Achievement = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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

      <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
        <h1 className="font-bold text-4xl text-green-700">60,000+</h1>
        <p className="font-bold text-xl py-5">Students Choose CreativeIT</p>
        <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quod reprehenderit nemo quia error similique numquam doloremque qui consequatur iusto recusandae repellendus odio vel magnam, dolores beatae iure aliquid nostrum.</p>
      </div>

      <div className="flex flex-col px-8 py-10 bg-rose-100 rounded-3xl mx-3">
        <h1 className="font-bold text-4xl">18,000+</h1>
        <p className="font-bold text-xl py-5">Got Career Placement</p>
        <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quod reprehenderit nemo quia error similique numquam doloremque qui consequatur iusto recusandae repellendus odio vel magnam, dolores beatae iure aliquid nostrum.</p>
      </div>

      <div className="flex flex-col px-8 py-10 bg-cyan-100 rounded-3xl mx-3">
        <h1 className="font-bold text-4xl text-cyan-700">91%</h1>
        <p className="font-bold text-xl py-5">Success Ratio</p>
        <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quod reprehenderit nemo quia error similique numquam doloremque qui consequatur iusto recusandae repellendus odio vel magnam, dolores beatae iure aliquid nostrum.</p>
      </div>

      <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
        <h1 className="font-bold text-4xl text-green-700">28,000+</h1>
        <p className="font-bold text-xl py-5">Works As Expert Freelancer</p>
        <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quod reprehenderit nemo quia error similique numquam doloremque qui consequatur iusto recusandae repellendus odio vel magnam, dolores beatae iure aliquid nostrum.</p>
      </div>


      </Slider>
    </div>
  );
};

export default Achievement;