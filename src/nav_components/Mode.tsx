import React, { useState, useEffect, useContext } from 'react'
import classes from './Nav.module.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import MyContext from '../Contsxt/MyContext';

interface Content {
    icon: string;
}

export default function Mode(Props: Content) {
    const { toggleSwitch } = useContext(MyContext);
    const [isTextInView, setIsTextInView] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [textRef, textInView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        let prevScrollY = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            if (currentScrollY < prevScrollY) {
                setIsHidden(false);
            } else {
                setIsHidden(true);
            }
            prevScrollY = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const handleMouseMove = () => {
            setIsHidden(false);
            clearTimeout(timer);
            timer = setTimeout(() => {
                setIsHidden(true);
            }, 5000);
        };
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (textInView && !isTextInView) {
        setIsTextInView(true);
    }

    return (
        <div>
            <div className={`${classes.ButtonIcon} ${isHidden ? classes.hidden : ""}`} ref={textRef}>
                {isTextInView && (
                    <motion.div
                        className={classes.ButtonIcon}
                        initial={{ x: 10 }}
                        animate={{ x: 0, transition: { ease: "easeOut", duration: 0.9 } }}
                        onClick={toggleSwitch}
                    >
                        <img className={classes.ButtonIcon} src={Props.icon} alt="Button Image" />
                    </motion.div>
                )}
            </div>
        </div>
    )
}
