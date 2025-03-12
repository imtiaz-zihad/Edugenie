"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    { id: 1, image: "/78db8e4412041deb0d4a6950b4b209e8.jpg", title: "Slide 1", text: "Explore the power of Edugain" },
    { id: 2, image: "/images.jfif", title: "Slide 2", text: "Build and learning Education" },
    { id: 3, image: "/file-page1.jpg", title: "Slide 3", text: "Fast and scalable solutions" },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to EduGain!</h1>

      <div className="w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
        <Slider ref={setSliderRef} {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative">
              <div className="relative w-full h-96">
               
                <Image src={slide.image} alt={slide.title} layout="fill" objectFit="cover" priority />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                <h2 className="text-3xl font-bold">{slide.title}</h2>
                <p className="text-lg mt-2">{slide.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all">
        More EduGain
      </button>
    </div>
  );
}
