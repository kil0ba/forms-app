import React from 'react';
import { connect } from "react-redux";

import s from './Navigation.module.scss';
import NavigationItem from "./NavigationItem/NavigationItem";
import { MapStateToPropsModel } from "../../../store/types/props.model";
import { NavItem } from "../../../models/navItem.model";

const navItems = [
  new NavItem('Login', '/login', { displayIf: "!login" }),
  new NavItem('Signup', '/signup', { displayIf: "!login" }),
  new NavItem('Logout', '/logout', { displayIf: "login" }),
]

const Navigation = (props: NavigationProps) => {
  let renderedNavs = [...navItems];
  renderedNavs = renderedNavs.filter(nav => {
    return (nav.options?.displayIf === 'login' && props.token) || (nav.options?.displayIf === '!login' && !props.token)
  })

  return (
    <div className={ s.div }>
      <nav className={ s.nav }>
        <ul className={ s.ul }>
          { renderedNavs.map(el => <NavigationItem key={ el.text } link={ el.url }>{ el.text }</NavigationItem>) }
        </ul>
      </nav>
    </div>
  );
};

interface NavigationProps {
  sideDraw?: boolean;
  token?: string;
}

const mapStateToProps: MapStateToPropsModel<NavigationProps> = state => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Navigation);
