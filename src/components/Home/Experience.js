import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Image from "next/image";
import msq from "@/public/images/msq.png";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  img,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%]  mx-auto flex flex-col items-center justify-between dark:text-light mobile:w-[80%] "
    >
      <div className="flex items-center justify-between w-full">
        <div className="">
          <LiIcon reference={ref} />
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className=""
          >
            <h3 className="capitalize font-bold text-2xl mobile:text-xl sm:text-lg">
              {position}&nbsp;
              <a
                href={companyLink}
                target="_blank"
                className="text-primary  dark:text-primaryDark capitalize"
              >
                @{company}
              </a>
            </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm">
              {time} | {address}
            </span>
            <p className="font-medium w-full sm:text-sm whitespace-pre-line">
              {work.split('\n').map((line, index) => (
                <span key={index}>
                 {line.trim()}
                 <br />
                 </span>
        ))}
            </p>
          </motion.div>
        </div>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="laptop:my-[100px] tablet:my-[40px] mobile:my-[30px]  text-dark sm:mt-[20px]">
      <h2 className="font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light tablet:text-6xl mobile:text-5xl sm:text-4xl sm:mb-10 sm:mt-20">
        Experience
      </h2>

      <div
        ref={ref}
        className=" mx-auto relative laptop:w-[90%] tablet:!w-full mobile:!w-full sm:!w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light mobile:w-[4px] sm:w-[2px] tablet:left-[28px] mobile:left-[35px] sm:left-[20px] "
        >
          {" "}
        </motion.div>

        <ul className="w-full flex flex-col items-start justify-between ml-4 mobile:ml-2 sm:!ml-5 ">
        <Details
            position="Full-Stack Developer"
            company="GTRIIP Pte Ltd (Now known as trevo)"
            companyLink="https://www.trevo.ai/"
            time="May 2023 - July 2023  "
            address="Singapore"
            work={`- Improved system reliability by resolving a persistent Bluetooth keycard bug during on-site testing — required extensive debugging, edge case analysis, and real-device validation.
              - Worked on app-side service integration with backend systems for secure keyless access, helping reduce user friction.
              - Collaborated with QA and product teams, reinforcing the importance of cross-functional teamwork in maintaining software quality.`}
          />

          <Details
            position="Signal Officer"
            company="SINGAPORE ARMED FORCES"
            companyLink="https://www.mindef.gov.sg/"
            time="June 2021 - April 2023"
            address="Singapore"
            work={`- Supervised and collaborated with teams to complete assigned tasks.
                  - Oversaw daily operations and planned communications during military exercises.
                  - Acted as liaison between command staff and technical teams to align on operational goals.`}
          />

          <Details
            position="Software Engineer"
            company="Ngee Ann Polytechnic"
            companyLink="https://www.np.edu.sg/"
            time="May 2021 - June 2021"
            address="Singapore"
            work={`-Designed serverless backend logic with AWS Lambda and S3, focusing on performance and scalability.
                  -Developed REST APIs to interface with external services like Google Maps for GPS navigation.
                  -Built a chatbot system using Python and NLP libraries to enhance user interaction features — a use case relevant for user interaction features like messaging.
                  -Created a UI for park visitors to interact with the robot and request directions.`}
          />

          {/* <Details
            position="Customer Relationship Specialist"
            company="Manulife Vietnam"
            companyLink="https://www.manulife.com.vn/"
            time="2020-2021"
            address="Ha Noi, Viet Nam"
            work=" I sold insurance plan and organised multiples events in the company.  "
          />

          <Details
            position="Customer Relationship Specialist"
            company="B-RISE"
            companyLink="www.google.com"
            time="2019-2020"
            address="Ha noi, Viet Nam"
            work=" Making the marketing plan, working directly with clients and the team who responsed for each part of the project"
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
