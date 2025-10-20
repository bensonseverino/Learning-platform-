import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initials={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[]300px">
            <h1 className=" text-2xl font-bold">The Coding Journey</h1>
            <p className="text-dark2">
              TCJ is a platform dedicated to empowering aspiring developers.
              From beginner tutorials to advanced programming concepts, we
              provide a comprehensive learning experience designed to help you
              master coding skills, build projects, and launch your tech career.
            </p>
          </div>
          {/* second section */}
          <div className=" grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200 ">
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200 ">
                    Software Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200 ">
                    Apps Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200 ">
                    E-learning
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Links</h1>
                <div className="text-dark2">
                  <ul className="space-y-2 text-lg">
                    <li className="cursor-pointer hover:text-secondary duration-200 ">
                      Home
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-200 ">
                      Services
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-200 ">
                      About
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-200 ">
                      Contact
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center gap-2 w-full flex-wrap">
              <input
                type="text"
                placeholder="Enter your email"
                className="flex-1 min-w-0 p-3 bg-white py-4 focus:ring-0 focus:outline-none placeholder:text-dark2 rounded-l-lg"
              />
              <button className="flex items-center gap-2 justify-center bg-primary text-white font-semibold rounded-r-lg hover:bg-secondary duration-200 shadow-[0px_10px_8px_-7px_#f7ba34] hover:shadow-[0px_10px_8px_-7px_#69a79c] py-4 px-6 group">
                Go
              </button>
            </div>
            {/* social icons  */}
            <div className="flex space-x-6 py-3">
              <a href="#">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaTwitter className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaLinkedin className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaRedditAlien className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

{
  /* <FaWhatsapp />
<FaTwitter />
<FaLinkedin />
<FaRedditAlien /> */
}
