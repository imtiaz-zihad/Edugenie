"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const features = [
    { id: 1, text: "AI-Powered Course Generation" },
    { id: 2, text: "Personalized Learning Paths" },
    { id: 3, text: "Instant Course Summaries" },
    { id: 4, text: "Smart Quiz Generator" },
    { id: 5, text: "Interactive Video Lessons" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center pb-28 bg-gradient-to-br from-teal-500 via-cyan-600 to-teal-900 text-white text-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/banner.jpg"
          alt="EduGenie Banner"
          fill
          className="object-cover opacity-20 blur-sm"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-[-5]" />

      {/* Floating Glows */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-white opacity-20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-yellow-400 opacity-10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Main Text Content */}
      <div className="z-10 relative max-w-3xl pt-20 pb-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to EduGenie
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl mb-6 px-4 sm:px-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Revolutionizing learning with AI-powered course generation.
        </motion.p>

        {/* <motion.button
          className="px-6 sm:px-8 py-3 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-500 transition-all shadow-xl hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button> */}
      </div>

      {/* Feature Slider */}
      <div className="relative mt-7 w-full max-w-5xl z-10">
        <Slider {...settings}>
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="p-6 mx-2 text-white text-center rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl flex items-center justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: feature.id * 0.2 }}
            >
              <p className="text-base sm:text-lg font-semibold text-white">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
