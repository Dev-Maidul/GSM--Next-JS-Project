// app/page.js
'use client';

import HeroSlider from '@/components/HeroSlider';
import HowItWorks from '@/components/HowItWorks';
import { SlideButton } from '@/components/ReusableButtons';
import WhyChooseUs from '@/components/WhyChooseUs';


export default function Home() {
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} clicked!`);
    alert(`${buttonName} clicked!`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-10/12 mx-auto">
      <HeroSlider />
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>

      {/* <div className="py-12 px-4 text-white text-center">
        <h1 className="text-5xl font-bold mb-8">
          Welcome to Global Scholarship Platform
        </h1>
        <p className="text-xl mb-12 max-w-2xl">
          Discover, organize, and apply for global scholarship opportunities with ease.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center justify-center">
          <SlideButton onClick={() => handleButtonClick('Explore Scholarships')} className="px-8 py-4 text-lg md:text-xl" bgColor="bg-gray-900" slideBgColor="bg-gray-800">
            Explore Scholarships
          </SlideButton>
          <SlideButton onClick={() => handleButtonClick('Go to Dashboard')} className="px-8 py-4 text-lg md:text-xl" bgColor="bg-gray-900" slideBgColor="bg-gray-800">
            Go to Dashboard
          </SlideButton>
        </div>
      </div> */}
    </div>
  );
}
