// components/HowItWorks.jsx
'use client'; // This is a client component for animations.

import { motion } from 'framer-motion';
import { FaSearch, FaClipboardList, FaPaperPlane, FaBell } from 'react-icons/fa'; // Importing icons

const steps = [
  {
    icon: FaSearch,
    title: 'Discover Scholarships',
    description: 'Easily search and filter thousands of global scholarship opportunities by country, university, and degree type.',
  },
  {
    icon: FaClipboardList,
    title: 'Organize & Prepare',
    description: 'Bookmark your favorite scholarships, access SOP templates, document checklists, and IELTS resources.',
  },
  {
    icon: FaPaperPlane,
    title: 'Apply with Confidence',
    description: 'Get real-time application countdowns and guidance to submit your applications accurately and on time.',
  },
  {
    icon: FaBell,
    title: 'Stay Notified',
    description: 'Receive personalized deadline alerts and reminders directly to your dashboard and email.',
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 px-4 text-white relative z-10"> {/* Ensure it's above the main background */}
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg"
        >
          How It Works
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the section is in view
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 p-8 rounded-lg shadow-xl flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-4xl text-[#ff5478] mb-4"> {/* Icon color matching your button gradients */}
                <step.icon />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-300 text-center">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
