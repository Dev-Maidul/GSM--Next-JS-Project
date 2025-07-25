// components/WhyChooseUs.jsx
'use client'; // This is a client component for animations and icons.

import { motion } from 'framer-motion';
import { FaClipboardList, FaClock, FaGlobe, FaLightbulb, FaUserShield } from 'react-icons/fa';
// Importing relevant icons from react-icons/fa and react-icons/md

import { MdOutlineSupportAgent } from 'react-icons/md'; // Example for support icon

const features = [
  {
    icon: FaGlobe,
    title: 'Global Opportunities',
    description: 'Access a vast database of scholarships from universities and organizations worldwide.',
  },
  {
    icon: FaClock,
    title: 'Real-time Deadlines',
    description: 'Stay updated with accurate, real-time countdowns and personalized deadline alerts.',
  },
  {
    icon: FaLightbulb,
    title: 'Expert Guidance',
    description: 'Leverage our comprehensive SOP templates, document checklists, and IELTS resources.',
  },
  {
    icon: FaUserShield,
    title: 'Verified Scholarships',
    description: 'We list only verified and legitimate scholarship opportunities from official sources.',
  },
  {
    icon: MdOutlineSupportAgent, // Using MdOutlineSupportAgent for a modern look
    title: 'Dedicated Support',
    description: 'Our team is here to assist you through every step of your scholarship application journey.',
  },
  {
    icon: FaClipboardList, // Reusing FaClipboardList from HowItWorks
    title: 'Personalized Dashboard',
    description: 'Manage your bookmarks, track applications, and receive tailored notifications in one place.',
  },
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 px-4 text-white relative z-10"> {/* Slightly different dark background */}
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg"
        >
          Why Choose Us?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" // 3 columns on large screens
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-5xl text-[#ff00c6] mb-4"> {/* Icon color matching your button gradients */}
                <feature.icon />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
