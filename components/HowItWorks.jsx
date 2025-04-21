"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Create Your Account",
      description: "Sign up and unlock access to personalized AI-driven learning.",
      icon: "👤",
    },
    {
      id: 2,
      title: "Pick Your Path",
      description: "Explore tailored courses based on your goals and interests.",
      icon: "🧭",
    },
    {
      id: 3,
      title: "Interactive Learning",
      description: "Dive into lessons, quizzes, and discussions with our AI assistant.",
      icon: "📖",
    },
    {
      id: 4,
      title: "Grow & Earn",
      description: "Track progress, earn certificates, and achieve career goals.",
      icon: "🌟",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Education",
      author: "Jane Doe",
      image:
        "https://i.ibb.co.com/Pdxvwzq/Wordpress-featured-images-3-1672727544811.jpg",
    },
    {
      id: 2,
      title: "Design Thinking in Digital Classrooms",
      author: "Mark Taylor",
      image:
        "https://i.ibb.co.com/G4ntT60t/3262010000-N10-hmchigh-e1708456253249.jpg",
    },
    {
      id: 3,
      title: "How to Stay Focused While Studying Online",
      author: "Alex Morgan",
      image:
        "https://i.ibb.co.com/Y7fd7HHW/Lackawanna-College-BLOG-How-Do-I-Stay-Focused-While-Studying-Helpful-Tips-and-Tricks-FINAL.webp",
    },
  ];
  return (
    <section className="bg-gradient-to-br from-[#f0f9ff] to-white px-4 py-20">
      {/* How It Works Header */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How It Works
      </motion.h2>

      {/* Vertical Steps Timeline */}
      <div className="max-w-3xl mx-auto space-y-10 relative border-l-4 border-teal-500 pl-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <div className="absolute -left-[34px] top-1 text-2xl bg-teal-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
              {step.icon}
            </div>
            <h3 className="text-xl  font-bold text-gray-800 pl-3  mb-1">{step.title}</h3>
            <p className="text-gray-600 pl-2">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Blogs Header */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mt-28 mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
         📚 Featured Blog 
      </motion.h2>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent px-5 py-6">
              <h3 className="text-lg font-semibold text-white">{blog.title}</h3>
              <p className="text-sm text-gray-300">{blog.author}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Blog Button */}
      <div className="mt-16 text-center">
        <Link href="/blogs">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full shadow-md transition-all"
          >
            Explore All Blogs ✨
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
