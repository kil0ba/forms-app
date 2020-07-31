import React, { useEffect, useState, Fragment } from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import s from './Header.module.scss';
import Navigation from "./Navigation/Navigation";
// import listIcon from '../../assets/icons/listIcon.png';

const animationTiming = {
  enter: 300
};

const Header = () => {
  const [animation, setAnimation] = useState<boolean>(false);
  const [navAnimation, setNavAnimation] = useState<boolean>(false);
  useEffect(() => setAnimation(true), []);

  return (
    <CSSTransition
      mountOnEnter
      timeout={ animationTiming }
      in={ animation }
      onEntered={ () => setNavAnimation(true) }
      classNames={ {
        enterActive: s.enterHeader
      } }>
      <header className={ s.header }>
        <CSSTransition
          mountOnEnter
          timeout={ animationTiming }
          in={ navAnimation }
          classNames={ {
            enterActive: s.showNavigation
          } }>
          <div className={ s.navsContainer }>
            <div className={ s.logoContainer }>
              <div className={ s.logo }/>
              <p className={ s.brandName }>Form Builder</p>
            </div>
            <div className={ s.navigationContainer }>
              <Navigation />
            </div>
          </div>
        </CSSTransition>
      </header>
    </CSSTransition>
  );
};

export default Header;
