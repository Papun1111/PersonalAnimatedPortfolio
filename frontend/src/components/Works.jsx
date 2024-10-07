import React from 'react';
import {Tilt} from 'react-tilt';
import mywork_data from '../assets/mywork_data';
import iconarrow from "../assets/arrow_icon.svg";
import { motion } from 'framer-motion';

const MyWork = () => {
  return (
    <div id='projects' className='mywork container mx-auto p-6'>
      <div className="mywork-title text-center mb-8">
        <h1 className='text-3xl font-bold'>My Latest Work</h1>
      </div>
      <div className="mywork-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mywork_data.map((work, index) => (
          <Tilt
            key={index}
            className="work-card"
            options={{ max: 25, scale: 1.05, speed: 400 }}
          >
            <motion.div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <a href={work.w_link} target='_blank' rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <img src={work.w_img} alt={work.w_name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h1 className='text-xl font-semibold mb-2'>{work.w_name}</h1>
                  <motion.a
                    href={work.w_link}
                    target='_blank'
                    rel="noopener noreferrer"
                    className='text-blue-600 hover:underline'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Link
                  </motion.a>
                </div>
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
      <div className="mywork-showmore text-center mt-8">
        <p className='text-lg'>Show More</p>
        <motion.a 
          href="https://github.com/Papun1111" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.2 }}
        >
          <img src={iconarrow} alt="Show more" className="inline-block mt-2" />
        </motion.a>
      </div>
    </div>
  );
}

export default MyWork;
