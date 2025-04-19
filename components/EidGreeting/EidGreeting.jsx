'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const StudentDashboard = () => {
  const [registeredWebinars, setRegisteredWebinars] = useState([]);

  const badges = [
    { name: 'Completed Web Dev Course', icon: '🖥️' },
    { name: '100% Quiz Score', icon: '🏆' },
    { name: 'Active Participant', icon: '🎯' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Imtiaz', score: 950 },
    { rank: 2, name: 'Janealam', score: 900 },
    { rank: 3, name: 'Showrv', score: 850 },
    { rank: 4, name: 'Istiak', score: 800 },
  ];

  const upcomingWebinars = [
    { title: 'Advanced JavaScript', date: 'March 20, 2025', time: '10:00 AM' },
    { title: 'React Basics', date: 'March 25, 2025', time: '1:00 PM' },
    { title: 'Node.js for Beginners', date: 'March 28, 2025', time: '3:00 PM' },
  ];

  const handleRegister = (webinarTitle) => {
    setRegisteredWebinars((prev) => [...prev, webinarTitle]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 12 }}
      className="bg-gray-900 shadow-2xl mx-auto p-8 text-center text-white"
    >
      {/* Achievements Section */}
      <h2 className="mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 text-3xl">
        Student Achievements
      </h2>
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-5xl">{badge.icon}</div>
            <p className="mt-4 font-semibold text-purple-400">{badge.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Leaderboard Section */}
      <h2 className="mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 text-3xl">
        Progress Leaderboard
      </h2>
      <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden mb-8">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-6 py-4 text-purple-400">Rank</th>
              <th className="px-6 py-4 text-purple-400">Name</th>
              <th className="px-6 py-4 text-purple-400">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-700 border-b border-gray-600"
                whileHover={{ scale: 1.01 }}
              >
                <td className="px-6 py-4 text-gray-300">{entry.rank}</td>
                <td className="px-6 py-4 text-gray-200">{entry.name}</td>
                <td className="px-6 py-4 font-semibold text-gray-100">{entry.score}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upcoming Webinars Section */}
      <h2 className="mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 text-3xl">
        Upcoming Webinars/Live Sessions
      </h2>
      <div className="space-y-6">
        {upcomingWebinars.map((webinar, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-center bg-gray-800 shadow-md p-6 rounded-lg hover:scale-105 transition-transform transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div>
              <h3 className="font-semibold text-gray-200 text-xl">{webinar.title}</h3>
              <p className="text-gray-300">{webinar.date} - {webinar.time}</p>
            </div>
            <button
              onClick={() => handleRegister(webinar.title)}
              disabled={registeredWebinars.includes(webinar.title)}
              className={`bg-gradient-to-r ${
                registeredWebinars.includes(webinar.title)
                  ? 'from-gray-500 to-gray-600 cursor-not-allowed'
                  : 'from-purple-500 to-indigo-600 hover:opacity-90'
              } px-6 py-3 rounded-md font-semibold text-white transition-all shadow-md`}
            >
              {registeredWebinars.includes(webinar.title) ? 'Registered' : 'Register Now'}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Social Sharing Section */}
      <div className="mt-8 flex flex-col gap-6 items-center">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-3 rounded-md font-semibold text-white transition-all shadow-md hover:opacity-90 cursor-pointer"
        >
          Share Your Dashboard
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-6 mt-2"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-full text-white transition-all cursor-pointer shadow-md bg-gray-500"
          >
            <FaCopy />
          </motion.button>
          {[
            {
              href: `https://www.facebook.com/sharer/sharer.php?u=https://your-app-url.com`,
              icon: <FaFacebookF />,
              bg: 'bg-blue-600',
              hover: 'hover:bg-blue-700',
            },
            {
              href: `https://twitter.com/intent/tweet?text=Check out my dashboard!`,
              icon: <FaTwitter />,
              bg: 'bg-blue-400',
              hover: 'hover:bg-blue-500',
            },
            {
              href: `https://api.whatsapp.com/send?text=Check out my dashboard!`,
              icon: <FaWhatsapp />,
              bg: 'bg-green-500',
              hover: 'hover:bg-green-600',
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.bg} p-4 rounded-full text-white transition-all shadow-md ${item.hover}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StudentDashboard;