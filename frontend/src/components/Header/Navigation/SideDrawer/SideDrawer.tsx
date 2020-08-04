import React from 'react';

import s from './SideDrawer.module.scss';
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Navigation from "../Navigation";

const SideDrawer: React.FunctionComponent<sideDrawerProps> = ({ isOpen, drawerHandler }) => {
  return (
    <div className={ s.container }>
      <div className={ [s.sideDrawer, isOpen ? s.Open : s.Close].join(' ') }>
        <Navigation/>
      </div>
      <Backdrop show={ isOpen } clicked={ drawerHandler }/>
    </div>
  );
};

interface sideDrawerProps {
  isOpen: boolean,
  drawerHandler: () => void
}

export default SideDrawer;
