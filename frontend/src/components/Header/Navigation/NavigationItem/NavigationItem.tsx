import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.scss';

const NavigationItem = (props: navigationItemProps) => (
  <li className={ classes.NavigationItem }>
    <NavLink
      exact={ props.exact }
      activeClassName={ classes.active }
      to={ props.link }>
      { props.children }
    </NavLink>
  </li>
);

interface navigationItemProps {
  children: string,
  link: string,
  exact?: boolean
}

export default NavigationItem;
