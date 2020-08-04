import React from 'react';

import classes from './Backdrop.module.scss';

const Backdrop: React.FunctionComponent<backdropProps> = props => (
  props.show ? <div className={ classes.Backdrop } onClick={props.clicked}/> : null
);

interface backdropProps {
  show: boolean;
  clicked?: () => void;
}

export default Backdrop;
