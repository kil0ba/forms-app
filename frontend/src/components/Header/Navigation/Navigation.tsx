import React from 'react';
import s from './Navigation.module.scss';
import CSSTransition from "react-transition-group/CSSTransition";

const animationTiming = {
  enter: 1000
};

const Navigation = (props: NavigationProps) => {
  const navItems = [{ text: 'Login' }, { text: 'Signup' }]


  return (
    <CSSTransition
      mountOnEnter
      timeout={ animationTiming }
      in={ props.showAnimated }
      classNames={ {
        enterActive: s.showNavigation
      } }>
      <div>
        <nav className={ s.nav }>
          <ul className={ s.ul }>
            { navItems.map(el => <li key={ el.text } className={ s.li }>{ el.text }</li>) }
          </ul>
        </nav>
      </div>
    </CSSTransition>
  );
};

interface NavigationProps {
  showAnimated: boolean;
}

export default Navigation;
