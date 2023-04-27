import React, { useContext } from 'react'
import MyContext from '../Contsxt/MyContext';

export default function TryTest() {
    const { isOn} = useContext(MyContext);

  return (
    <div>{isOn? 'mark': 'dele'}</div>
  )
}
