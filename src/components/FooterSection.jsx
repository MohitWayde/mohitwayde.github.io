
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";



const FooterSection = () => {
  return (
    <footer className="w-full  py-8 px-4 flex flex-col items-center justify-center">
      <div className="w-4/5 max-w-6xl flex flex-col md:flex-row justify-between items-center mx-auto">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-white text-4xl font-bold">Mohit Wayde</h2>
          <span className="text-gray-300 text-lg mt-1">Passionate Software Engineer</span>
        </div>
        <nav className="flex flex- w-1/5 gap-8 mb-4 md:mb-0">
         <a href="https://www.linkedin.com/in/mohit-wayde/">
          <FaLinkedin size={30} className="text-gray-300 hover:text-white transition-colors duration-300" />
         </a>
         <a href="https://mohitwayde.github.io/">
          <FiGithub size={30} className="text-gray-300 hover:text-white transition-colors duration-300" />
         </a>
         <a href="mailto:mohitwayde17@gmail.com">
          <HiOutlineMailOpen size={30} className="text-gray-300 hover:text-white transition-colors duration-300" />
         </a>
        </nav>
      </div>
      <div className="w-full flex flex-col items-center mt-8">
        <span className="text-gray-400 text-sm text-center">
          © Mohit Wayde. All rights reserved.
        </span>
      </div>
     
    </footer>
  );
};

export default FooterSection;
