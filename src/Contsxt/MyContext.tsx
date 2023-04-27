import { createContext } from 'react';

interface MyContextProps {
  isOn: boolean;
  theme: string;
  picType:string;
  iconType:string;
  logoType:string;
  isLoading:boolean;
  hamType:string;
  toggleSwitch: () => void;
}

const MyContext = createContext<MyContextProps>({
  isOn: false,
  toggleSwitch: () => { },
  theme: 'dark',
  picType: '/img/webpic1.png',
  iconType: '/img/lightIcon2.png',
  logoType: '/img/logo.png',
  isLoading: true,
  hamType: ''
});

export default MyContext;