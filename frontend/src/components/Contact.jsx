import React from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import location_icon from "../assets/location_icon.svg";
import mail_icon from "../assets/mail_icon.svg";
import call_icon from "../assets/call_icon.svg";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "cfe25b0a-28d3-42b7-a401-6915148e943f");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Form has been submitted successfully!");
        }
    };

    return (
        <div id="contact" className="contact p-6 bg-black text-white">
            <h1 className="text-3xl font-bold text-center mb-8">Get in Touch</h1>
      
            
            {/* Earth Canvas */}
            <motion.div 
                className="canvas-container mb-8"
                initial="hidden"
                animate="show"
                variants={slideIn}
                style={{ width: '100%', height: '400px' }} // Increase height as needed
            >
                <EarthCanvas />
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-start">
                <motion.div 
                    className="contact-left w-full md:w-1/2 p-4"
                    initial="hidden"
                    animate="show"
                    variants={slideIn}
                >
                    <h1 className="text-2xl font-semibold">Let's Talk</h1>
                    <p className="mt-4 text-gray-300">
                        I am eager to connect and collaborate on exciting new projects...
                    </p>
                    <div className="contact-details mt-6">
                        <div className="contact-detail flex items-center mb-4">
                            <img src={mail_icon} alt="Email" className="mr-2" />
                            <p className="text-gray-300">gohanmohapatra@gmail.com</p>
                        </div>
                        <div className="contact-detail flex items-center mb-4">
                            <img src={call_icon} alt="Phone" className="mr-2" />
                            <p className="text-gray-300">+91 7008939577</p>
                        </div>
                        <div className="contact-detail flex items-center mb-4">
                            <img src={location_icon} alt="Location" className="mr-2" />
                            <p className="text-gray-300">Cuttack, Odisha</p>
                        </div>
                    </div>
                </motion.div>
                <form onSubmit={onSubmit} className="contact-right w-full md:w-1/2 p-4 bg-blue-800 rounded-lg shadow-md">
                    <label className="block mb-2 text-gray-200">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full p-2 border border-gray-600 bg-black text-white rounded mb-4 transition duration-200 focus:outline-none focus:border-blue-500"
                    />
                    <label className="block mb-2 text-gray-200">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        className="w-full p-2 border border-gray-600 bg-black text-white rounded mb-4 transition duration-200 focus:outline-none focus:border-blue-500"
                    />
                    <label className="block mb-2 text-gray-200">Write Your Message Here</label>
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Enter your message"
                        className="w-full p-2 border border-gray-600 bg-black text-white rounded mb-4 transition duration-200 focus:outline-none focus:border-blue-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full p-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
                    >
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
