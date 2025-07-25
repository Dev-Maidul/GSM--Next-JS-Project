// components/HeroSlider.jsx
'use client'; // This is a client component for interactivity (slider, animations).

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { SlideButton } from './ReusableButtons'; // Importing the SlideButton component

const slides = [
  {
    id: 1,
    title: 'Unlock Your Global Dreams',
    description: 'Explore thousands of scholarship opportunities worldwide. Your journey to international education starts here.',
    buttonText: 'Find Scholarships',
    buttonLink: '/scholarships',
    imageUrl: 'https://i.ibb.co/WvW1dSw1/Diploma.png' // Image for general scholarship/diploma
  },
  {
    id: 2,
    title: 'Never Miss a Deadline',
    description: 'Real-time countdowns and personalized alerts ensure you apply on time, every time.',
    buttonText: 'View Upcoming',
    buttonLink: '/upcoming-applications',
    imageUrl: 'https://i.ibb.co/Z6zwYmrc/Masters.png' // Image for Masters scholarships
  },
  {
    id: 3,
    title: '',
    description: 'Access expert guides, templates, and resources to perfect your application documents and English proficiency.',
    buttonText: 'Access Resources',
    buttonLink: '/sop-ielts-resources',
    imageUrl: 'https://i.ibb.co/mr1CtQJk/Undergrade.png' // Image for Undergraduate scholarships
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide transition for infinite loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  // Variants for slide animation
  const slideVariants = {
    enter: { opacity: 0, x: 100 }, // Slide in from right
    center: { opacity: 1, x: 0 }, // Center position
    exit: { opacity: 0, x: -100 }, // Slide out to left
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl mt-12">
      {/* Background overlay for better text readability on top of images */}
      {/* This overlay is now less opaque as the image itself will have an overlay */}
      <div className="absolute inset-0 bg-black opacity-10 z-10"></div> 

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide} // Key helps AnimatePresence track unique components for animation
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8 z-20"
          style={{
            backgroundImage: `url(${slides[currentSlide].imageUrl})`, // Set background image from slide data
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // Add an overlay directly on the image for better text readability
            backgroundBlendMode: 'overlay', // Blends with the existing background color
            backgroundColor: 'rgba(0, 0, 0, 0.5)' // Dark overlay color
          }}
        >
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 max-w-4xl leading-tight"
          >
            {slides[currentSlide].title}
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...textVariants.visible.transition, delay: 0.2 }}
            className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl"
          >
            {slides[currentSlide].description}
          </motion.p>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...textVariants.visible.transition, delay: 0.4 }}
          >
            <SlideButton
              onClick={() => { /* router.push(slides[currentSlide].buttonLink) */ }} // Add actual navigation here
              className="px-8 py-4 text-lg md:text-xl"
              bgColor="bg-gray-900" // Use a dark background for the button
              slideBgColor="bg-gray-700"
            >
              {slides[currentSlide].buttonText}
            </SlideButton>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={clsx(
              "w-3 h-3 rounded-full transition-colors duration-300",
              index === currentSlide ? "bg-white" : "bg-gray-500 hover:bg-gray-300"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
