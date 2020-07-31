import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header/>
      <body>
      { props.children }
      </body>
    </div>
  );
};

interface LayoutProps {
  children: ReactElement;
}

export default Layout;
