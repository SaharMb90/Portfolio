import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./ButtonStyles/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";


const Hero = ({

}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl  px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8"
          variants={scrollAnimation}>
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              <strong >I am Sahar Mirzabaki</strong>
            </h1>
            <p className="my-2">
              A Frontend web developer, with a strong passionate about web development technologies. I am expertise in development of user-friendly web applications specialy with React, Next and FireBase.
              Furthermore, I can develop and design modern web applications using wordPress.</p>
            <h6 className='text-black-600 font-bold'>Professional Experience:</h6>
            <ul className="my-2"><li> Teacher Assistant | Azad University | Feb2022-Jul2022</li>
              <li>Front-end Web Developer | Ferdowsi Cloud Company | Oct 2020-June2021</li>
              <li>Web Developer | Khebregan-Asr-Ertebat | February2018-Sep2020</li>
            </ul>

           
          </div>
          <div className="flex">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
             
              <Image
                src="/assets/PROFILE.png"
                alt="profile"
                quality={100}
                width={300}
                height={400}
                layout="responsive"
                className='img-profile'
              />
             
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>


    </div>
  );
};

export default Hero;
