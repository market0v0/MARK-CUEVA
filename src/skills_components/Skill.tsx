import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { FC } from 'react';
import classes from './Skill.module.css';
import { Frame } from './Frame';
import { Rectangle } from './Rectangle';
import SideText from './SideText';
import { Language } from './Language';
import Slideshow from '../testTry/Slideshow';
import HorizontalScrollableComponent from './Scrollskills';

interface Props {
  className?: string;
}
const pass = 'I am a passionate individual with a dedication to exploring the vast opportunities in the tech field, mainly in web development. I am eager to gain real job experience and grow through continuous self-improvement. I am teachable and willing to adapt to any scenario, and I have the perseverance to not quit until the goal is met. Currently, I am a 3rd-year BSIT student with a solid foundation in programming using several languages such as Python, Java, TS, JS, and C. Moreover, I have experience working with various frameworks, but I mainly focus on web development in the frontend with some knowledge in backend development. Please let me know if you need any further assistance.'
export const Skill: FC<Props> = memo(function Skill(props = {}) {
    const images = [
    "/img/java.png",
    "/img/Html.png",
    "/img/css.png",
    "/img/python.png",
    "/img/ts.png"
  
  ];
  const [isTextInView, setIsTextInView] = useState(false);
  const [isSkillInView, setIsSkillInView] = useState(false);
  const [textRef, textInView] = useInView({ threshold: 0.2 });
  const [skillRef, skillInView] = useInView({ threshold: 0.2 });
  const [frameRef, frameInView] = useInView({ threshold: 0.2 });

  // Set isInView state to true only once
  if (textInView && !isTextInView) {
    setIsTextInView(true);
  }

  if (skillInView && !isSkillInView) {
    setIsSkillInView(true);
  }

  return (
    <div>
      <div className={classes.frame}>
   
        <div className={classes.sideText} ref={textRef}>
          {isTextInView && (
            <motion.div
              className={classes.sideText}
              initial={{ y: 50 }}
              animate={{ y: 0, transition: { ease: "easeOut", duration: 0.9 } }}
            >
              <SideText content={pass } />
            </motion.div>
          )}
        </div>
        <div className={classes.sideSkill} ref={skillRef}>
          {isSkillInView && (
            <motion.div
              className={classes.sideSkill}
              initial={{ y: 50 }}
              animate={{ y: 0, transition: { ease: "easeOut", duration: 0.9 } }}
            >
         
      <HorizontalScrollableComponent images={images} />
             {/*   <Language languages={'JAVA'}
                description={'Has the knowledge in OOP concepts  and  JBDC manipulation  with some backgrounds on java frameworks'}
                frameworks={'Spring, Tomcat'} />
              <Language languages={'PYTHON'}
                description={'Has the knowledge on different type of python library in data manipulation or data analytics such as pandas sklearn etc. also fimiliar with some frameworks, like DJANGO and FLASK'}
                frameworks={'PANDAS, PYTHON DATA ANALYTICS, DJANGO AND FLASK'} />
              <Language languages={'WEB DEV'}
                description={'With a basic understanding of React fundamentals, CSS and HTML, coupled with experience in SQL and data handling, one can build scalable and maintainable web applications with dynamic user interfaces and robust data management capabilities.'}
                frameworks={'REACT, HTML5, FIREBASE AND CSS'} />  */}
            </motion.div>
          )}
        </div> 
      </div>
    </div>
  );
});
