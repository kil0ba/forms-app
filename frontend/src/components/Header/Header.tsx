import React, { useEffect, useState } from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import s from './Header.module.scss';
import Navigation from "./Navigation/Navigation";

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
        <div>Logo</div>
        <div className={ s.navigationContainer }>
          <Navigation showAnimated={ navAnimation }/>
        </div>
      </header>
    </CSSTransition>
  );
};

export default Header;
