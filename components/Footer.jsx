// components/Footer.jsx
'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Footer = ({ className }) => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Upcoming Applications', href: '/upcoming-applications' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const servicesLinks = [
    { name: 'SOP Writing', href: '/services/sop-writing' },
    { name: 'Scholarship Application', href: '/services/scholarship-application' },
    { name: 'IELTS & English Resources', href: '/sop-ielts-resources' }, // Reusing existing path
    { name: 'Visa Guidance', href: '/services/visa-guidance' }, // Example additional service
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
      className={clsx("p-6 mt-8 shadow-inner text-white", className)}
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.05), transparent 70%), #000000",
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left mb-8">
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm opacity-80 mb-2">
              Your one-stop solution to discover, organize, and apply for global scholarship opportunities.
            </p>
            <p className="text-sm opacity-80">
              We help aspiring students achieve their academic dreams abroad.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white hover:text-gray-300 transition-colors duration-300 text-base opacity-80">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white hover:text-gray-300 transition-colors duration-300 text-base opacity-80">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {/* Facebook Link */}
              <Link href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-300">
                <FaFacebookF size={24} />
              </Link>
              {/* YouTube Link */}
              <Link href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition-colors duration-300">
                <FaYoutube size={24} />
              </Link>
              {/* LinkedIn Link */}
              <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright and Prepared By Section - Centered */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Global Scholarship Management Platform. All rights reserved.
          </p>
          <p className="text-sm opacity-80 mt-1">
            Prepared by Md Maidul Islam.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
