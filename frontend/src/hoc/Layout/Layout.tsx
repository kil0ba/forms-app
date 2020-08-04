import React, { ReactElement } from 'react';
import Header from "../../components/Header/Header";

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header/>
      <div>
      { props.children }
      </div>
    </div>
  );
};

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

export default Layout;
