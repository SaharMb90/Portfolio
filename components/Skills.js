import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const skills = [
  "JavaScript, Python",
  "React.js, Next, jQuery, WordPress",
  "HTML 5, CSS 4, Scss",
  "Adobe Photoshop, Adobe XD, Figma",
  "Firebase real-time database, MYSQL",
  "GitLab, GitHub",
  "Microsoft office , LibreOffice(Ubuntu)"
]

const Skills = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
    className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    id="contactme"
  >
    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8  y-8 my-12"> 
        <ScrollAnimationWrapper className="flex w-full justify-end">
          
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

          <motion.div className="flex flex-col items-start justify-center  w-full lg:w-9/12 mt-8 ml-4 " variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            My Skills
            </h3>
            <div className="text-black-500 text-bold self-start list-inside ml-4 sm:ml-8">
            <ul className="text-black-500 self-start list-inside">
              {skills.map((skills, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={skills}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}>
                  {skills}
                </motion.li>
              )
              )}
            </ul>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Skills;
