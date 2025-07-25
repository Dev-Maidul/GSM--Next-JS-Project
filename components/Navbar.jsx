// components/Navbar.jsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { BorderButton, GradientButton, SlideButton } from './ReusableButtons'; // SlideButton imported

const Navbar = ({ className }) => {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: 'Scholarships', href: '/scholarships', delay: 0.6 },
    { name: 'Upcoming', href: '/upcoming-applications', delay: 0.7 },
    { name: 'Gov. Scholarships', href: '/government-scholarships', delay: 0.8 },
    { name: 'SOP & IELTS', href: '/sop-ielts-resources', delay: 0.9 },
  ];

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleDashboardClick = () => {
    router.push('/dashboard');
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }} // Smoother fade-in and slight slide-down
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Smoother transition
      className={clsx("p-4 shadow-lg", className)} // Keep padding and shadow via className
      style={{ // Apply the custom radial gradient background via style prop
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link href="/" className="text-white text-2xl font-bold hover:text-gray-200 transition-colors duration-300">
            Global Scholarships
          </Link>
        </motion.div>

        <div className="space-x-4 flex items-center">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: link.delay, duration: 0.4, ease: "easeOut" }} // Smoother transition for links
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
            transition={{ delay: 1.0, duration: 0.4, ease: "easeOut" }} // Smoother transition for buttons
          >
            <SlideButton onClick={handleDashboardClick} className="px-4 py-2 text-base" bgColor="bg-red" slideBgColor="bg-gray-800">
              Dashboard
            </SlideButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.4, ease: "easeOut" }} // Smoother transition for buttons
          >
            <SlideButton onClick={handleLoginClick} className="px-4 py-2 text-base">
              Login
            </SlideButton>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
