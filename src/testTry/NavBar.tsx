import React, { useContext, useState } from 'react';
import './Nav.css';
import MyContext from '../Contsxt/MyContext';
import Mode from '../nav_components/Mode';


const DropDownNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { iconType,isOn, hamType, toggleSwitch } = useContext(MyContext);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    function scrollDown(id: string) {
        const section = document.querySelector(`#${id}`);
        section!.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(!isOpen);
    }
    return (
        <nav className="dropdown-nav">
       
           <img className='nav-toggle' onClick={handleToggle} src={hamType} alt="Button Image" />
            {isOpen && (
                <div>
                
                <ul className="dropdown-menu" style={{background: isOn? "rgba(223, 223, 223, 0.99)" : "rgba(25, 25, 25, 0.99)"}}>
                    <div>
                    <img className='closeIcon' onClick={handleToggle} src={isOn? '/img/closeIcon1.png':'/img/closeIcon.png'} alt="Button Image" />
                    <img className='logo' src= '/img/logo.png' alt="Button Image" />
                    </div>
                    <li className="nav-item">
                        <div className="nav-link" onClick={(event) => { event.preventDefault();
                        scrollDown('profile');}}>
                            PROFILE
                        </div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link" onClick={(event) => { event.preventDefault();
                        scrollDown('skills');}}>
                            SKILL
                        </div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link" onClick={(event) => { event.preventDefault();
                        scrollDown('portfolio');}}>
                            PORTFOLIO
                        </div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link" onClick={(event) => { event.preventDefault();
                        scrollDown('about');}}>
                           ABOUT
                        </div>
                    </li>
                    <div className="mode">
                        <img className='modeIcon' src={iconType} onClick={toggleSwitch}/>
                        {isOn? "Dark Mode " : "Light Mode "}
                    </div>
                    
                </ul>
                </div>
            )}
        </nav>
    );
};

export default DropDownNav;
