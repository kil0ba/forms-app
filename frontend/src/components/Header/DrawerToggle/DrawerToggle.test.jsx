import React from 'react';
import {  render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DrawerToggle from './DrawerToggle';

describe('drawerToggle', () => {
  it('should call the function then clicked', ( cb ) => {
    const clickHandler = () => {
      cb();
    };
    const { container } = render(<DrawerToggle clicked={ clickHandler }/>);
    container.querySelector('div').click();
  });
});
