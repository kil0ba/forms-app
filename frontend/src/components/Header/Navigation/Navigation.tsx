import React from 'react';
import s from './Navigation.module.scss';

const Navigation = (props: NavigationProps) => {
  const navItems = [{ text: 'Login' }, { text: 'Signup' }]


  return (
      <div className={ s.div }>
        <nav className={ s.nav }>
          <ul className={ s.ul }>
            { navItems.map(el => <li key={ el.text } className={ s.li }>{ el.text }</li>) }
          </ul>
        </nav>
      </div>
  );
};

interface NavigationProps {
}

export default Navigation;
