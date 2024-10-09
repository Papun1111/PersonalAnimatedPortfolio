import React from 'react'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen mx-auto overflow-hidden">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container with responsive flex direction */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Computer Canvas - Full width on all screen sizes */}
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px] animate-fade-in">
            <ComputersCanvas />
          </div>

          {/* Content container */}
          <div className="w-full flex flex-col items-center lg:items-start">
            {/* Decorative line container */}
            <div className="flex flex-row lg:flex-col items-center gap-2 lg:gap-0 mb-6 lg:mb-0">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#915EFF]" />
              <div className="h-1 w-20 lg:h-40 lg:w-1 violet-gradient" />
            </div>

            {/* Text content */}
            <div className="text-center lg:text-left mt-4 lg:mt-0">
              <h1 className="font-black text-white text-[40px] xs:text-[50px] sm:text-[60px] lg:text-[80px] leading-tight lg:leading-[98px]">
                Hi, I'm{" "}
                <span className="text-[#915EFF] hover:text-purple-400 transition-colors duration-300">
                  Papun Mohapatra
                </span>
              </h1>
              
              <p className="text-[#dfd9ff] font-medium text-[16px] xs:text-[20px] sm:text-[26px] lg:text-[30px] leading-relaxed lg:leading-[40px] mt-4 max-w-2xl mx-auto lg:mx-0">
                I am a Full Stack Web Developer based in India.
              </p>

              {/* Optional: Added CTA button for mobile */}
              <div className="mt-8 lg:mt-12 sm:hidden">
                <button className="bg-[#915EFF] hover:bg-purple-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Only visible on larger screens */}
        <div className="hidden lg:flex absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2">
            <div className="w-3 h-3 rounded-full bg-[#915EFF] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
