import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css'; //alowing animated timeline
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


{/* declaring experience card */}
const ExperienceCard = ({ experience }) =>{
  return (
  <VerticalTimelineElement
    contentStyle={{background:'#1d1836', color:'#fff',}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full"> {/* Centerin our icons */}
        <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
 >
    <div>
      {/* rendering role title */}
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {/* rendering company names */}
          {experience.company_name}
        </p>
    </div>
    {/* definition of our experiences */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) =>(
        <li
        key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>

  </VerticalTimelineElement>
)
}

const Experience = () => {
  return (
    <>
      {/* creating the heading and making our p tags animated  */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}> 
          What i have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience.
        </h2>
      </motion.div>

      {/* Vertical timeline */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline > {/*just a line */}
          {/* Looping thru experiences */}
          {experiences.map((experience, index) => (
            // for each element we are returning a card and passing index as key and experience as data
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

// wrapping our export to be able to target it directly. making all the css apply
export default SectionWrapper(Experience, "work")