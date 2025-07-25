// components/Navbar.jsx
'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // AnimatePresence for exit animations
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { SlideButton } from './ReusableButtons'; // Using SlideButton for consistency
import { useState } from 'react'; // For managing mobile menu state

const Navbar = ({ className }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu visibility

  const navLinks = [
    { name: 'Scholarships', href: '/scholarships', delay: 0.6 },
    { name: 'Upcoming', href: '/upcoming-applications', delay: 0.7 },
    { name: 'Gov. Scholarships', href: '/government-scholarships', delay: 0.8 },
    { name: 'SOP & IELTS', href: '/sop-ielts-resources', delay: 0.9 },
  ];

  const handleLoginClick = () => {
    router.push('/login');
    setIsMobileMenuOpen(false); // Close menu on navigation
  };

  const handleDashboardClick = () => {
    router.push('/dashboard');
    setIsMobileMenuOpen(false); // Close menu on navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={clsx("p-4 shadow-lg relative z-20", className)} // z-index for mobile menu overlay
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Project Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link href="/" className="text-white text-2xl font-bold hover:text-gray-200 transition-colors duration-300">
            Global Scholarships
          </Link>
        </motion.div>

        {/* Desktop Navigation Links (hidden on small screens) */}
        <div className="hidden md:flex space-x-4 items-center">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: link.delay, duration: 0.4, ease: "easeOut" }}
            >
              <Link
                href={link.href}
                className={clsx(
                  "text-white text-lg hover:text-gray-200 transition-colors duration-300",
                  { "border-b-2 border-white opacity-100": pathname === link.href,
                    "opacity-70": pathname !== link.href
                  }
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.4, ease: "easeOut" }}
          >
            <SlideButton onClick={handleDashboardClick} className="px-4 py-2 text-base" bgColor="bg-gray-900" slideBgColor="bg-gray-800">
              Dashboard
            </SlideButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.4, ease: "easeOut" }}
          >
            <SlideButton onClick={handleLoginClick} className="px-4 py-2 text-base" bgColor="bg-gray-900" slideBgColor="bg-gray-800">
              Login
            </SlideButton>
          </motion.div>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (conditionally rendered) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-gray-900 absolute top-full left-0 w-full shadow-lg pb-4" // Full width, below navbar
          >
            <div className="flex flex-col items-center space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  className={clsx(
                    "block text-white text-lg hover:text-gray-200 transition-colors duration-300 py-2",
                    { "border-b-2 border-white opacity-100": pathname === link.href,
                      "opacity-70": pathname !== link.href
                    }
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <SlideButton onClick={handleDashboardClick} className="px-6 py-3 text-base w-fit" bgColor="bg-gray-800" slideBgColor="bg-gray-700">
                Dashboard
              </SlideButton>
              <SlideButton onClick={handleLoginClick} className="px-6 py-3 text-base w-fit">
                Login
              </SlideButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
