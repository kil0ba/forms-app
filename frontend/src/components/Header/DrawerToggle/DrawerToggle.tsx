import React from 'react';

import classes from './DrawerToggle.module.scss';

const DrawerToggle = (props: DrawerToggleProps) => (
  <div onClick={ props.clicked } className={ classes.DrawerToggle }>
    <div/>
    <div/>
    <div/>
  </div>
);

interface DrawerToggleProps {
  clicked: () => void;
}

export default DrawerToggle;
