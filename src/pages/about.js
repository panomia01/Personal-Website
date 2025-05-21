import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import codingzw from "../../public/images/Profile.jpeg";
import Skills from "@/src/components/Home/Skills";
import Layout from "@/src/components/Home/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Education from "@/src/components/Home/Education";
import Experience from "@/src/components/Home/Experience";
import TransitionEffect from "@/src/components/Home/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}> </span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title> Studio Zw | About Page </title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <div className="grid w-full grid-cols-8 gap-4 laptop:gap-16 py-0">
            <div className=" col-span-8 flex flex-col items-start justify-start order-2 py-10 laptop:py-0 laptop:col-span-3 laptop:order-1 sm:col-span-8 sm:py-6 mobile:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography{" "}
              </h2>
              <p className=" text-dark font-medium dark:text-light ">
                {" "}
                👋 Hi, I’m Zhan Wen!  
                I’m a penultimate-year Computer Science student at the National University of Singapore with a passion for building clean, user-focused digital solutions. From full-stack web apps to IoT projects, I love turning ideas into systems that can scale.
              </p>

              <p className=" text-dark font-medium dark:text-light mt-5 mb-5">
              With experience in software development, cloud services, and hands-on projects, I thrive at the intersection of creativity and logic. Whether I’m debugging a stubborn feature or leading a team at a hackathon, I bring curiosity, adaptability, and a builder’s mindset to everything I do.
              </p>
              
              <p className=" text-dark font-medium dark:text-light">
                {" "}
                I’ve worked across the stack with tools like React, Node.js, Python, and AWS, and I enjoy solving real-world problems through code. Whether it’s collaborating in a team, debugging tricky issues, or designing intuitive user flows, I’m always driven by curiosity, continuous learning, and the desire to make tech that truly helps people.
              </p>


              {/* <p className=" text-dark font-medium dark:text-light mt-5 mb-5">
                {" "}
                At my core, I’m a builder, a problem-solver, and a collaborator who believes that good tech is built with both logic and heart. I'm always up for a new challenge, excited to learn, and eager to make an impact — one thoughtful line of code at a time.{" "}
              </p>


              <p className=" text-dark font-medium dark:text-light">
                {" "}
                If you're looking for someone who brings technical versatility, user-centric thinking, and a good sense of humor — let’s connect!
              {" "}
              </p> */}
            </div>

            <div className="col-span-8 order-1 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light laptop:order-2 laptop:col-span-3 sm:col-span-8 mobile:col-span-8">
              <div className="absolute top-2 -right-3 -z-10 w-[102%] h-[101%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={codingzw}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl  "
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="laptop:col-span-2 flex laptop:flex-col laptop:items-end justify-between dark:text-light tablet:!col-span-8 flex-row items-center order-3 sm:flex-row py-10 laptop:py-0 sm:col-span-8 sm:py-6  mobile:col-span-8">
              {/* <div className="flex flex-col laptop:items-end justify-center text-dark dark:text-light items-center ml-2 ">
                <span className="inline-block text-7xl font-bold tablet:text-6xl sm:!text-xl mobile:text-3xl">
                  <AnimatedNumbers value={100} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 laptop:text-center tablet:text-lg mobile:text-base sm:text-sm">
                  satisfied clients
                </h2>
              </div> */}

              <div className="flex flex-col laptop:items-end justify-center text-dark dark:text-light items-center ml-2 ">
                <span className="inline-block text-7xl font-bold tablet:text-6xl sm:!text-xl mobile:text-3xl">
                  <AnimatedNumbers value={4} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 laptop:text-center tablet:text-lg mobile:text-base sm:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col laptop:items-end justify-center text-dark dark:text-light items-center ml-2 ">
                <span className="inline-block text-7xl font-bold tablet:text-6xl sm:!text-xl mobile:text-3xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 laptop:text-center tablet:text-lg mobile:text-base sm:text-sm">
                  years of experience
                </h2>
              </div>

            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
