import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

import Layout from './Layout';

describe('Layout', () => {
  it('should render child', () => {
    const { getByTestId } = render(<Layout children={<span data-testid="child"> </span>} />)
    expect(getByTestId('child')).toBeTruthy();
  })
})
