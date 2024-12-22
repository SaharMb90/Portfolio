import React, { useMemo, useState } from "react";
import Image from "next/image";
import ButtonPrimary from "./ButtonStyles/ButtonPrimary";
import ButtonOutline from "./ButtonStyles/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as LinkScroll } from "react-scroll";

const Projects = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [activeLink, setActiveLink] = useState(null);
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="projects"
    >
      <div className="max-w-screen-xl  sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="scrollwraper flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              My Peractitionary Projects
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Let's take a look!
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-4 ">
                  <Image
                    src="/assets/1.png"
                    width={145}
                    height={165}
                    alt="Online-shop"
                  />
                </div>
                <p className="text-lg text-[#343434]-600 font-medium text-left capitalize my-2 sm:my-7 max-w-md">
                  Online-shop using React & FireBase
                </p>

                <ul className="flex flex-col list-inside  pl-4 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    React.js
                  </li>
                  <li className="relative check custom-list my-2">
                    Scss
                  </li>
                  <li className="relative check custom-list my-2">
                    JSX
                  </li>
                  <li className="relative check custom-list my-2">
                    FireBase Real time Database
                  </li>

                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">

                  <ButtonOutline> <a href="https://github.com/SaharMb90/OnlineShop_Tempelate" target='blank'>GitHub Link </a></ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center ">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-4">
                  <Image
                    src="/assets/5.png"
                    width={145}
                    height={165}
                    alt="Data Anonymization"
                  />
                </div>
                <p className="text-lg text-[#343434]-500 font-medium text-left capitalize my-2 sm:my-7 max-w-md">
                  Data Anonymization With Regex 
                </p>
                <ul className="flex flex-col list-inside pl-4 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    JAVA
                  </li>
                  <li className="relative check custom-list my-2">
                    REGEX
                  </li>
                  <li className="relative check custom-list my-2">
                    Microsoft Azure Virtual Machines
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">

                  <ButtonOutline> <a href="https://github.com/SaharMb90/Sahar_Mirzabaki_Big_Data_Module_Masters_Level" target='blank'>GitHub Link</a> </ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-4">
                  <Image
                    src="/assets/3.png"
                    width={145}
                    height={165}
                    alt="ML Methods"
                  />
                </div>
                <p className="text-lg text-[#343434]-600 font-medium text-left capitalize my-2 sm:my-7 max-w-md">
                  Machine Learning Methods in Credit Score{" "}
                </p>
                <ul className="flex flex-col list-inside pl-4 items-start justify-start text-left text-black-500 flex-grow">

                  <li className="relative check custom-list my-2">
                    Machine Learning Algorithms
                  </li>
                  <li className="relative check custom-list my-2">
                    Pandas, Numpy
                  </li>
                  <li className="relative check custom-list my-2">
                    Scikit-Learn{" "}
                  </li>

                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <ButtonOutline><a href="https://github.com/SaharMb90/AI-Coursework-for-my-MSc-Artificial-Intelligence-Module" target='blank'>GitHub Link</a></ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        <div className="flex flex-col w-full my-16" id="contactme">
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Let's contact me! <br />
                  </h5>
                  <p></p>
                </div>
                <ButtonPrimary>  <LinkScroll
                  activeClass="active"
                  to="contactme"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("contactme");
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "contactme"
                      ? " text-white-500 animation-active "
                      : " text-black-500 hover:text-orange-500 ")
                  }
                >
                  Contact
                </LinkScroll></ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
