import React, { ReactElement } from 'react';
import Header from "../../components/Header/Header";

import s from './Layout.module.scss';

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header/>
      <div className={ s.body }>
      { props.children }
      </div>
    </div>
  );
};

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

export default Layout;
