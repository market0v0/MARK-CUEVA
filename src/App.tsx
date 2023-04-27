import { useContext, useState } from 'react';
import { memo } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import classes from './App.module.css';
import { Profile } from './profile_components/Profile/Profile';
import { Nav } from './nav_components/Nav';
import { Skill } from './skills_components/Skill';
import Mode from './nav_components/Mode';
import Hamburger from './nav_components/Hamburger';
import NavBar from './testTry/NavBar';

import MyComponent from './Contsxt/MyComponent';
import MyProvider from './Contsxt/MyProvider';
import MyButton from './Contsxt/MyComponent';
import TryTest from './testTry/TryTest';
import MainFrame from './MainFrame';
import MyContext from './Contsxt/MyContext';
import HorizontalScrollableComponent from './skills_components/Scrollskills';

interface Props {
  className?: string;
}


export const App: FC<Props> = memo(function App(props = {}) {
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg",
    "https://example.com/image5.jpg",
    "https://example.com/image6.jpg",
    "https://example.com/image7.jpg",
    "https://example.com/image8.jpg",
    "https://example.com/image9.jpg",
  ];

  return (
    <div >
 {/*           <h1>My Images</h1>
      <HorizontalScrollableComponent images={images} />  */}
     <MyProvider>
     <MainFrame/>
    </MyProvider> 
    </div>
  );
});
