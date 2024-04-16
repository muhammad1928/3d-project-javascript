import { motion } from 'framer-motion'; 

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Creating purple circle */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        {/* drawing line below purple circle */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi I&#39;m <span className="text-[#915eff]">Sodiq</span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop 3d visuals, user <br className='sm:block hidden' />
          interfaces and web applications
          </p>
        </div>
      </div>
      {/* rendering computer canvas*/}
      <ComputersCanvas />
   


      {/* creating the borders of the div */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>

          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary  flex justify-center items-start p-2">
            {/* creating motion in the circle (frame motion) */}
            <motion.div 
            animate={{
              y: [0, 24, 0] // animating only  axes from 0 px to 24 px to 0 px
            }}
            transition={{
              duration: 1.5, // duration is 1.5 seconds
              repeat: Infinity, // repeating infinity times
              repeatType: 'loop' // looping to infinity
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
          
        </a>
       </div>
    </section>
  )
}

export default Hero