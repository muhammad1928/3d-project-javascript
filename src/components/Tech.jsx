import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        // looping thru technologies
        <div className='w-28 h-28' key={technology.name}>
            {/* creating a boll each for every tech */}
            <BallCanvas icon={technology.icon} />
          </div>
      ))}
    </div>
  )
}

{/* wrapping so we can  target it later as usual */}
export default SectionWrapper(Tech, '');