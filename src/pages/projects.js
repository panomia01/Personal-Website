
import React from "react";
import Head from "next/head";
import Layout from "@/src/components/Home/Layout";
import AnimatedText from "@/src/components/Home/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/src/components/Home/Icons";
import softsync from "../../public/images/SoftSync.png";
import FYP from "../../public/images/FYP.jpg";
import H4G from "../../public/images/H4G.jpeg";
import WSS from "../../public/images/WSS.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/src/components/Home/TransitionEffect";
import logo from "../../public/images/coding_zw.jpg";

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full laptop:w-full flex flex-col laptop:flex-row items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-10 dark:bg-dark dark:border-light laptop:p-8 sm:rounded-2xl sm:rounded-br-3xl sm:p-4 laptop:max-h-[80vh]">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full max-w-full object-contain rounded-lg"
          style={{ maxHeight: "450px" }} // you can adjust the value
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 640px) 100%, (max-width:1024px) 50%, 50%"
        />

      </Link>
      <div className="w-full flex flex-col items-start justify-between laptop:pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark sm:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, description }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light laptop:max-h-[100vh] tablet:max-h-[50vh]">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:p-4  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto laptop:max-h-[70vh]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
            (max-width:1200px) 50vw, 33vw"
        ></FramerImage>
      </Link>
      <div className="flex flex-col w-full items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <div
          href={link}
          target="_blank"
          className="underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
          <p>
            {/* {description} */}
            {description?.split('\n').map((line, index) => (
                <span key={index}>
                 {line.trim()}
                 <br />
                 </span>
             ))}
          </p>
        </div>
        <div className="w-full mt-2 flex items-center justify-between  ">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Try it out!
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6 ">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectNoButton = ({ title, type, img, link, github, description }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light laptop:max-h-[100vh] tablet:max-h-[50vh]">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:p-4  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto laptop:max-h-[70vh]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
            (max-width:1200px) 50vw, 33vw"
        ></FramerImage>
      </Link>
      <div className="flex flex-col w-full items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <div
          href={link}
          target="_blank"
          className="underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
          <p>
            {/* {description} */}
            {description?.split('\n').map((line, index) => (
                <span key={index}>
                 {line.trim()}
                 <br />
                 </span>
             ))}
          </p>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> Studio Zw </title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 laptop:pt-2 flex flex-col items-center justify-center text-dark dark:text-light mobile:p-5">
        <Layout className="pt-[20px]">
          {/* <AnimatedText
            text="Work Hard, Play Hard!"
            className="mb-16 tablet:!text-5xl laptop:!text-6xl sm:mb-8 mobile:!text-4xl sm:!text-3xl"
          ></AnimatedText> */}

          <div className="grid grid-cols-12 laptop:gap-20 gap-y-32 laptop:gap-x-10 tablet:gap-x-8 mobile:gap-y-24 sm:gap-x-0 ">
            <div className="laptop:col-span-12 tablet:col-span-12 mobile:col-span-12 sm:col-span-12">
              <FeatureProject
                title="Personal Web Application "
                img={logo}
                summary="A personal web application using React, Tailwind CSS, and React Router. This project embodies my deep understanding and expertise in these technologies"
                link="/"
                github="/"
                type="Feature Project"
              />
            </div>
            <div className="laptop:col-span-3 tablet:col-span-3  mobile:col-span-6 sm:col-span-6">
              <Project
                title="SoftSync "
                img={softsync}
                link="https://softsync.netlify.app/"
                github="https://github.com/SoftSync01/soft-sync-master"
                type="Project 1"
                description={`SoftSync is a customisable Enterprise Resources Planning (ERP) application that aims to provide an all-in-one web platform for any enterprise needs.`}

              />
            </div>
            <div className="laptop:col-span-3 tablet:col-span-3 mobile:col-span-6 sm:col-span-6">
              <Project
                title=" Hack4Good Competition (Team Snowball)"
                img={H4G}
                link="https://snowball-nu.vercel.app/"
                github="https://github.com/Snowballmaking/snowball"
                type="Project 2"
                description={`Design and deploy a web-based voucher system for Hack 4 Good using TypeScript, Tailwind CSS, and Firebase.`}
              />{" "}
            </div>

            {/* <div className="laptop:col-span-12 tablet:col-span-12 mobile:col-span-12 sm:col-span-12">
              <FeatureProject
                title=" Weather Application "
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                    local currency."
                link="/"
                github="/"
                type="Feature Project"
              />
            </div> */}
            <div className="laptop:col-span-3 tablet:col-span-3  mobile:col-span-6 sm:col-span-6">
              <ProjectNoButton
                title="  Lora-based Smart IoT Application "
                img={FYP}
                link="/"
                github="/"
                type="Project 3"
                description={`Designed and built an IoT-enabled sensor board with EAGLE, performed data analysis, and evaluated MCU power sustainability.`}
              />
            </div>
            <div className="laptop:col-span-3 tablet:col-span-3  mobile:col-span-6 sm:col-span-6">
              <ProjectNoButton
                title=" WorldSkills Singapore (Electronics)"
                img={WSS}
                link="/"
                github="/"
                type="Project 4"
                description={`Programmed STMicroelectronics microcontrollers in C, troubleshot and repaired electronic boards, and designed custom PCBs using EAGLE.`}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
