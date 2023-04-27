import React from 'react';
import { motion } from 'framer-motion';
import "./slideshow.css";


const Bubble = () => {
    let count = 0;
    return (
      <div className="bubble-container">
        <motion.div
          className="bubble"
          animate={{
            y: [50, -50, 50],
            opacity: [0.7, 0.4, 0.7],
          }}
          transition={{
            duration: 2,
            
            times: [0, 0.5, 1],
            repeat: 4,
          }}
        ></motion.div>
      </div>
    );
  };
  
  export default Bubble;