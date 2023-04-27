import React, { useState } from 'react';
import MyContext from './MyContext';

interface MyProviderProps {
  children: React.ReactNode;
}

function MyProvider({ children }: MyProviderProps) {
  const [isOn, setIsOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [picType, setPicType] = useState('/img/webpic1.png');
  const [iconType, setIconType] = useState("/img/lightIcon2.png");
  const [logoType, setLogoType] = useState('/img/logo.png');
  const [hamType, setHamType] = useState('/img/lightHam.png');

  const toggleSwitch = () => {
    setIsOn(!isOn);
    setIsLoading(true);
    setTimeout(() => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      setPicType(picType === '/img/lightpic.png' ? '/img/webpic1.png' : '/img/lightpic.png')
      setIconType(iconType === "/img/lightIcon2.png" ? "/img/darkIcon2.png" : "/img/lightIcon2.png")
      setLogoType(logoType === '/img/logo2.png' ? '/img/logo.png' : '/img/logo2.png')
      setHamType(hamType === '/img/lightHam.png' ? '/img/darkHam.png' : '/img/lightHam.png')
      setIsLoading(false);
      console.log(theme)
    }, 1000);
  };

  const value = {
    isOn,
    toggleSwitch,
      theme,
  picType,
  iconType,
  logoType,
  isLoading,
  hamType
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default MyProvider;
