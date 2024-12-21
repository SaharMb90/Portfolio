import Image from "next/image";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";



const ContactMe = () => {
 const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [activeLink, setActiveLink] = useState(null);
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="contactme"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12"> 
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col items-start justify-center ml-auto w-full mt-20" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
           Contact Me
            </h3>
            <p className="my-2 text-black-500">
            
            </p>
            <div className="text-black-500 text-bold self-start list-inside ml-8 ">
             
               
                  <h1>Email: saharmirzabaki@gmail.com</h1>
                  <h1>Phone Numbers: +447471349935</h1>
                  <h1>Phone Numbers: +447377613097</h1>
                  <h1>GitHub Link:<a href="https://linkedin.com/in/sahar-mirzabaki" target='blank'> www.linkedin.com/in/sahar-mirzabaki </a></h1>
                  <h1>LinkedIn Link: <a href="https://github.com/SaharMb90" target="blank">https://github.com/SaharMb90 </a></h1>
               
             
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/12.png"
              alt="Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ContactMe;
