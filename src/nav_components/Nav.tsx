import { useState, useEffect, useRef, memo, useContext } from 'react';
import classes from './Nav.module.css';
import Mode from './Mode';
import Hamburger from './Hamburger';
import NavBar from '../testTry/NavBar';
import MyContext from '../Contsxt/MyContext';


interface Props {
  className?: string;
  logoUrl: string;
}

/* @figmaId 41:9 */
export const Nav: React.FC<Props> = memo(function Nav(props: Props = {
  logoUrl: ''
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isNavStagnant, setIsNavStagnant] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { iconType } = useContext(MyContext);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  function scrollDown(id: string) {
    const section = document.querySelector(`#${id}`);
    section!.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    function handleMouseMovement() {
      setIsNavVisible(true);

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
       console.log(window.innerWidth <= 800)
        setIsNavVisible(window.innerWidth <= 800);
      }, 5000);
    }

    function handleScroll() {
      const currentScrollPos = window.pageYOffset;

      setIsScrolled(currentScrollPos > 0);

      if (navRef.current) {
        setIsNavStagnant(navRef.current.getBoundingClientRect().top === 0);
      }

      if (prevScrollPos > currentScrollPos) {
        setIsNavVisible(true);
      } else if (prevScrollPos < currentScrollPos) {
        setIsNavVisible(false);
      }

      setPrevScrollPos(currentScrollPos);

      clearTimeout(timerRef.current!);

      timerRef.current = setTimeout(() => {
        setIsNavVisible(false);
      }, 5000);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMovement);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMovement);

      clearTimeout(timeoutId);
    };
  }, [prevScrollPos]);

  return (
    <>


  
      {isNavVisible && (
        <div
          className={`${classes.nav} ${isScrolled ? classes.scrolled : ''} ${isNavStagnant ? classes.stagnant : ''
            }`}
          ref={navRef}
        >
           <img className={classes.LogoIcon} src={props.logoUrl} />
           <div className={classes.navDropdown}>
           <NavBar/>
           </div>
      
         
        
          <div className={classes.navloc}>
            <div

              className={classes.pROFILE}
              onClick={(event) => {
                event.preventDefault();
                scrollDown('profile');
              }}
            >
              PROFILE
            </div>
            <div

              className={classes.sKILLS}
              onClick={(event) => {
                event.preventDefault();
                scrollDown('skills');
              }}
            >

              SKILLS
            </div>

            <div

              className={classes.pORTFOLIO}
              onClick={(event) => {
                event.preventDefault();
                scrollDown('portfolio');
              }}
            >
              PORTFOLIO
            </div>
            <div

              className={classes.aBOUT}
              onClick={(event) => {
                event.preventDefault();
                scrollDown('about');
              }}
            >
              ABOUT
            </div>
            <Mode icon={iconType}/>
          </div>
        </div>
      )}
  
   
     
         
    </>
  );
});
