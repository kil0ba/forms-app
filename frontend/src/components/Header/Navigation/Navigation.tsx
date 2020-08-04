import React from 'react';
import s from './Navigation.module.scss';
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = (props: NavigationProps) => {
  const navItems = [{ text: 'Login', url: '/login' }, { text: 'Signup', url: '/signup' }]


  return (
      <div className={ s.div }>
        <nav className={ s.nav }>
          <ul className={ s.ul }>
            { navItems.map(el => <NavigationItem key={ el.text } link={ el.url }>{ el.text }</NavigationItem>) }
          </ul>
        </nav>
      </div>
  );
};

interface NavigationProps {
  sideDraw?: boolean;
}

export default Navigation;
