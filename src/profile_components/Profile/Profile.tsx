import { memo, useRef, useState } from 'react';
import type { FC } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { PictureIcon } from './PictureIcon';
import classes from './Profile.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


interface Props {
  className?: string;
  onClick:any;
  label:string;
  fname:string;
  lname:string;
  picUrl:string;
}

export const Profile: FC<Props> = memo(function Profile(props = {
  onClick: undefined,
  label: '',
  fname: '',
  lname: '',
  picUrl: ''
}) {
  const [isTextInView, setIsTextInView] = useState(false);
  const [isSkillInView, setIsSkillInView] = useState(false);
  const [textRef, textInView] = useInView({ threshold: 0.2 });
  const [skillRef, skillInView] = useInView({ threshold: 0.2 });


  // Set isInView state to true only once
  if (textInView && !isTextInView) {
    setIsTextInView(true);
  }

  if (skillInView && !isSkillInView) {
    setIsSkillInView(true);
  }

  return (
    <div className={classes.container}> 
      <div className={classes.right}>
        <PictureIcon imglink={props.picUrl}className={classes.picture} />
      </div >
      <div className={classes.left} ref={skillRef}>
        {isSkillInView && (
          <motion.div
            className={classes.labels}
            initial={{ y: -250 }}
            animate={{ y: 0, transition: { ease: "easeOut", duration: 0.9 } }}
          >
            <div className={classes.name}>
              { props.fname.split("").map((letter, index) => (
                <span key={index} className={classes.letter}>{letter}</span>
              ))}
            </div>
            <div className={classes.lname}>
              {props.lname.split("").map((letter, index) => (
                <span key={index} className={classes.letter}>{letter}</span>
              ))}
            </div>
            <div className={classes.student_label}>INFORMATION TECHNOLOGY STUDENT</div>
            <button className={classes.button}  onClick={props.onClick}> {props.label}</button>
          </motion.div>
        )}

      </div>
    </div>
  );
});
