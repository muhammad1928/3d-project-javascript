import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
function HOC() {
    return (
        <motion.section
        variants={staggerContainer()} // animate section
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount:0.25}} // showing only once and animate for 0.25 sec
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // dymamic classname
        >
            <span className='hash-span' id={idName}> {/* retrieving the id names passed in the files */}
                &nbsp; {/* emptry space */}
            </span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper