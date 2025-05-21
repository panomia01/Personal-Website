import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "@/src/components/Home/Logo";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";

import { motion } from "framer-motion";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={`relative px-4 py-1 rounded-md transition-colors duration-300 ${
        isActive
          ? "bg-cyan-500 text-white dark:bg-cyan-500 dark:text-black"
          : "hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-300 dark:hover:text-black"
      } ${className}`}
    >
      {title}
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full laptop:px-32 py-12 font-medium flex items-center justify-between text-dark dark:text-light relative z-30 tablet:px-16 mobile:px-8 sm:px-5">
      {/* <button
        className="flex-col justify-center items-center laptop:hidden sm:ml-1 "
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button> */}

      {/* Laptop */}
      <div className="w-full laptop:flex justify-between items-center mobile:hidden tablet:hidden sm:hidden ">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          {/* <CustomLink href="/blog" title="Blog" className="ml-4" /> */}
        </nav>

        <nav className="flex items-center justify-between flex-wrap">
          <motion.a
            href="https://x.com/ZhanWenNg156096"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href="https://github.com/panomia01"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ngzhanwen/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            href="https://www.pinterest.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full "
          >
            <PinterestIcon />
          </motion.a>

          <motion.a
            href="https://dribbble.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile  */}

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col just-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32 "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/blog"
              title="Blog"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 mobile:mx-1"
            >
              <TwitterIcon />
            </motion.a>

            <motion.a
              href="https://github.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark mobile:mx-1"
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 mobile:mx-1"
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href="https://www.pinterest.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full mobile:mx-1 "
            >
              <PinterestIcon />
            </motion.a>

            <motion.a
              href="https://dribbble.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 mobile:mx-1"
            >
              <DribbbleIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className=" absolute left-[50%] top-4 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
