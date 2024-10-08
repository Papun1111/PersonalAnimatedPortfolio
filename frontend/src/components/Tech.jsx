import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import sun from "../assets/sun.jpg";

const Tech = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0"
        style={{ backgroundImage: `url(${sun})` }}
      />
      
      {/* Content Container with gradient overlay */}
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-slate-900/90 to-slate-800/90 py-20">
        <div className="container mx-auto">
          <div className="flex flex-row flex-wrap justify-center gap-8 px-4">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="group relative w-28 h-28 transition-all duration-300 transform hover:scale-110"
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Main content container */}
                <div className="relative w-full h-full rounded-full bg-slate-800/50 backdrop-blur-sm p-2 shadow-lg shadow-cyan-500/20 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <BallCanvas icon={technology.icon} />
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-slate-800 text-cyan-300 px-3 py-1 rounded-full text-sm whitespace-nowrap shadow-lg">
                      {technology.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
