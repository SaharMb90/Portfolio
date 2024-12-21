import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";


const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 sm:col-start-1 sm:col-end-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <ul className="hidden lg:flex col-start-1 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("skills");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "skills"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              My Skills
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("projects");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "projects"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Projects
            </LinkScroll>
            <LinkScroll
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
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Contact Me
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <img src="/about.png" className="max-w-8 max-h-8" />
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("skills");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "skills"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <img src="/skills.png" className="max-w-8 max-h-8" />
              Skills
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("projects");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "projects"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >

              <img src="/projects.png" className="max-w-8 max-h-8" />
              Projects
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contactme"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contactme");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "contactme"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <img src="/contact.png" className="max-w-8 max-h-8" />
              Contact Me
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
