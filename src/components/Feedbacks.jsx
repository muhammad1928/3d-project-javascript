import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"

const FeedbackCard = ({index, testimonial, name, designation, company, image}) =>(
  <motion.div variants={fadeIn('', 'spring', index*0.5, 0.75)}
  className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      {/* testimonials */}
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      {/* wrapping other information */}
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          {/* rendering names*/}
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img 
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover" 
        />
      </div>
    </div>

  </motion.div>
)


const Feedbacks = () => {
  return (
    // testimonials
    <div className="mt12 bg-black-00 rounded-[20px]">
      {/* headings */}
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.heroSubText}>What others say</p>
          <h2 className={styles.heroHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      {/* */}
      <div className={`${styles.paddingX} mt-20 pb-14 flex flex-wrap gap-7`}>
        {/* Looping thru testimonials */}
        {testimonials.map((testimonial, index) => (
          // creating cards 
          <FeedbackCard
            key={testimonial.name}
            index={index}
            // all other testimonials 
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '');