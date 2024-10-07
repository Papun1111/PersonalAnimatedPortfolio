import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import myface from "../assets/myface.png";
import got from "../assets/got.jpeg"; // Use your background image here

const defaultTiltOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const About = () => {
  return (
    <div
      id="about"
      className="relative opacity-70 min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${got})`, 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60" /> {/* Overlay for opacity */}

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h1>
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Profile Image with Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Tilt options={defaultTiltOptions} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src={myface}
                alt="Profile"
                className="relative w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </Tilt>
          </motion.div>

          {/* About Content */}
          <div className="space-y-8">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4 text-gray-300"
            >
              <p className="leading-relaxed hover:text-white transition duration-300">
                Hi, I'm Papun, a passionate engineering student at ITER with a
                keen interest in full-stack development. My expertise lies in the
                MERN stack, where I enjoy creating dynamic and innovative web
                applications.
              </p>
              <p className="leading-relaxed hover:text-white transition duration-300">
                I have a deep passion for basketball. Whether I'm hitting the
                court for a game or watching the latest match, the sport fuels my
                enthusiasm for teamwork and strategy.
              </p>
            </motion.div>

            {/* Skills */}
            <div className="space-y-4">
              {[
                { name: "HTML & CSS", level: "50%" },
                { name: "Javascript", level: "70%" },
                { name: "ReactJs", level: "85%" },
                { name: "MongoDB, Node, ExpressJs", level: "90%" }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <p className="text-gray-300">{skill.name}</p>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform origin-left transition-all duration-500 hover:scale-x-110"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements with Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-3 gap-8 mt-16 relative z-10"
        >
          {[
            { number: "2+", text: "YEARS OF EXPERIENCE" },
            { number: "10+", text: "PROJECTS COMPLETED" },
            { number: "20+", text: "HAPPY CLIENTS" }
          ].map((achievement, index) => (
            <Tilt key={index} options={{ ...defaultTiltOptions, max: 25 }}>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </h1>
                <p className="text-gray-400 text-sm">{achievement.text}</p>
              </div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
