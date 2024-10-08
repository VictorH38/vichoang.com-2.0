import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaSwift,
  FaNodeJs,
  FaLaravel,
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaSnowflake,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiGo,
  SiDjango,
  SiSpringboot,
  SiMysql,
  SiSqlite,
  SiGooglecloud,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Languages',
        icons: [
          <SiCplusplus key="cplusplus" />,
          <FaPython key="python" />,
          <FaJava key="java" />,
          <SiGo key="go" />,
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaPhp key="php" />,
          <FaSwift key="swift" />,
        ],
      },
      {
        title: 'Frameworks and Technologies',
        icons: [
          <FaReact key="react" />,
          <FaNodeJs key="nodejs" />,
          <SiDjango key="django" />,
          <SiSpringboot key="springboot" />,
          <SiTailwindcss key="tailwind" />,
          <FaSnowflake key="snowflake" />,
          <FaLaravel key="laravel" />,
          <SiMysql key="mysql" />,
          <SiSqlite key="sqlite" />,
          <FaAws key="aws" />,
          <SiGooglecloud key="googlecloud" />,
          <FaDocker key="docker" />,
          <FaGit key="git" />,
          <FaGithub key="github" />,
          <SiPostman key="postman" />,
        ],
      },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer Intern - Coinbase',
        stage: 'May 2024 to August 2024',
      },
      {
        title: 'Full Stack Web Developer Intern - Tresi',
        stage: 'May 2023 to Present',
      },
    ],
  },
  // {
  //   title: 'credentials',
  //   info: [
  //     {
  //       title: 'Bachelor of Computer Science - USC',
  //       stage: '2025',
  //     },
  //   ],
  // },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  // console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto'>
      <Circles />
      {/* avatar img */}
      {/* <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div> */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Transforming <span className='text-accent'>vision</span> into innovative solutions.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            With a robust background in computer science and hands-on experience in software engineering, I have contributed to major projects at <a href='https://www.coinbase.com/' target='_blank' className='underline hover:text-accent transition-all duration-300'>Coinbase</a> and <a href='https://shoptresi.com/' target='_blank' className='underline hover:text-accent transition-all duration-300'>Tresi</a>. From developing full stack applications to engineering mobile solutions, my expertise spans multiple languages and frameworks. My work drives user engagement and operational efficiency, reflecting a commitment to quality and innovation.
          </motion.p>
          {/* counters */}
          {/* <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'> */}
              {/* experience */}
              {/* <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} delay={1} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div> */}
              {/* clients */}
              {/* <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={250} duration={5} delay={1} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div> */}
              {/* projects */}
              {/* <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={650} duration={5} delay={1} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div> */}
              {/* awards */}
              {/* <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} delay={1} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 pb-[6rem] xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex flex-wrap gap-x-4 gap-y-2'>
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className='text-2xl text-white'>{icon}</div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

About.title = 'About';
export default About;
