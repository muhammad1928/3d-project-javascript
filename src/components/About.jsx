import React from "react";
import { Tilt }  from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

// creating a new functional component for ServiceCard
const ServiceCard = ({index, title, icon}) => {
  // returning a p tag with title coming from the promps above this line  
  return (
    // using react tilt. on small diveces is w 250px otherwise full
    <Tilt className="xs:w-[250px] w-full">
      {/* creating motion div which is going to fade in from right side, type of spring, delay, duration  */}
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        {/*creating a div with the tilt options */}
        <div 
          options= {{max: 45, scale: 1, speed: 350 }} 
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          
          {/* creating images inside the cards */}
          <img src={icon} alt={title} className="w-22 h-20 object-contain "/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    // wrapping everything in a react fragment
    <>
      {/*animating the motion div */}
      <motion.div variants={textVariant()}>
        {/* setting up intro and overview */}
        <p className={styles.sectionSubText}>Introduction</p> 
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* setting up  the p tag (paragraph) */}
      <motion.p
        // fadeIn takes 4 parameters which are; direction, type, delay, duration 
        variants={fadeIn('', '', 0.1, 1)}
        className=" mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am on the beginning of my career and this is my 4th project as a web developer.
        I have experience in JavaScript, TypeScript, and expertise in frameworks like React, Node.js and Three.js.
        I have also more experience in other programming languages such as Python, Java, C#, C++, Matlab as well as the frameworks and libraries
        such as Django, Tensorflow, Numpy, Keras, OpenCV which are used for machine learning projects. I have had positive interactions with all my clients
        in different fields. I hope we can have a positive interaction. Let&apos;s wrok together to bring your ides to life!
      </motion.p>

      {/* creating the tilting cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {/* looping thru the services to get all the cards */}
        {services.map((service, index) => (
          // for each service, we want to run ServiceCard component to get, the key (title), index and all other stuff coming from service
          <ServiceCard key={service.title} index= {index} {...service} />
        ))}
      </div>
    </>
  )
};

// adding higher  order component to export ( first the component, second the id)
export default SectionWrapper(About, "about");