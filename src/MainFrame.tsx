import { useContext, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import classes from './App.module.css';
import { Profile } from './profile_components/Profile/Profile';
import { Nav } from './nav_components/Nav';
import { Skill } from './skills_components/Skill';

import MyContext from './Contsxt/MyContext';


const Loading = () => {
    return ( 
      <motion.div
  
        transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
      >
        <div className={classes.loadingIcon} />
      </motion.div>
    );
  };
export default function () {
    const { isOn,theme, picType, logoType, isLoading } = useContext(MyContext);

  return (
    <div className={` ${theme === 'dark' ? classes.dark : ''}`}>
     <section id="profile">
        <Profile
          onClick={undefined}
          label={'Download CV'}
          fname={'MARK VINCENT'}
          lname={'CUEVA'}
          picUrl={picType} />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="portfolio">
        <Profile onClick={undefined} label={''} fname={''} lname={''} picUrl={''} />
      </section>
      <section id="about">
        
      </section>
      <Nav logoUrl={logoType} />
  
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.7)' }}
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
