import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './Nav.module.css';

export default function Hamburger() {
    const [showFloatingDiv, setShowFloatingDiv] = useState(false);

    const handleFloatingDivToggle = () => {
        setShowFloatingDiv(!showFloatingDiv);
    };

    const handleFloatingDivClose = () => {
        setShowFloatingDiv(false);
    };
    function scrollDown(id: string) {
        const section = document.querySelector(`#${id}`);
        section!.scrollIntoView({ behavior: 'smooth' });
        setShowFloatingDiv(!showFloatingDiv);
    }

    return (
        <div >

            <>mark</>
            <div className={classes.nav}>
            <img onClick={handleFloatingDivToggle}  src='/img/darkHam.png' className={classes.hamburgericon}/>
            </div>
               
      
          <div >
            <AnimatePresence>
                {showFloatingDiv && (
                    <motion.div
                        key="floating-div"
                        initial={{ x: '100%', y: '-50%', opacity: 0 }}
                        animate={{ x: '10%', y: '-50%', opacity: 1 }}
                        exit={{ x: '100%', y: '-50%', opacity: 0 }}
                        className={classes.hamburgerOpt}
                    >
                        <div onClick={(event) => { event.preventDefault(); scrollDown('profile');}}>
                            PROFILE
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>
    );
}
