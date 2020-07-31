import React, { useEffect, useState } from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import s from './Header.module.scss';
import Navigation from "./Navigation/Navigation";
import { RouteProps, useHistory } from "react-router-dom";
import { WithRouterProps } from "react-router";
// import listIcon from '../../assets/icons/listIcon.png';

const animationTiming = {
  enter: 300
};

const Header = (props: HeaderProps) => {
  const [animation, setAnimation] = useState<boolean>(false);
  const [navAnimation, setNavAnimation] = useState<boolean>(false);
  const history = useHistory();
  useEffect(() => setAnimation(true), []);

  const redirect = () => {
    history.push('/');
  };

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
              <div className={ s.logo } onClick={ redirect }/>
              <p className={ s.brandName } onClick={ redirect }>Form Builder</p>
            </div>
            <div className={ s.navigationContainer }>
              <Navigation/>
            </div>
          </div>
        </CSSTransition>
      </header>
    </CSSTransition>
  );
};

interface HeaderProps extends RouteProps {

}

export default Header;
