"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import CourseCarousel from "@/components/CourseCarousel";
import SuccessStories from "@/components/SuccessStories";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import StudentDashboard from "@/components/studentdasboard/Studentdasboard";
import EducatorAndSubscription from "@/components/EducatorAndSubscription/EducatorAndSubscription";
import FeaturedBlogs from "@/components/FeaturedBlogs/FeaturedBlogs";

const HomePage = () => {
  return (
    <div className="home-container min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <Navbar />

      {/* Hero Section */}
      <HeroBanner />

      {/* Features */}
      <CourseCarousel />
      <SuccessStories />
      <HowItWorks />

      {/* Chatbot Section */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          How can we help you today?
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Our chatbot is here to assist with your inquiries and provide
          recommendations.
        </p>

        <Chatbot />

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Need further help? Check out our{" "}
            <a href="/faq" className="text-teal-500 hover:underline">
              FAQ
            </a>{" "}
            or{" "}
            <a href="/contact" className="text-teal-500 hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <StudentDashboard />
      <EducatorAndSubscription />
      <FeaturedBlogs />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
