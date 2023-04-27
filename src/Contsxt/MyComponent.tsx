import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyButton() {
  const { isOn, toggleSwitch } = useContext(MyContext);

  return (
    <div>
      <p>The switch is {isOn ? 'on' : 'off'}</p>
      <button onClick={toggleSwitch}>
        {isOn ? 'Turn off' : 'Turn on'}
      </button>
    </div>
  );
}

export default MyButton;
