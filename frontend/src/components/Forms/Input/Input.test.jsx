import React from 'react';
import { Form } from 'react-final-form';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

describe('input', () => {

  afterEach(cleanup);

  it('should render span element for deleting', () => {
    const { container } = render(
      <Form onSubmit={() => {}}>
        { () => <Input name="sample" label="sample" inputType="text" showDeleteBtn={true}/> }
      </Form>
    );
    expect(container.querySelector('span')).toBeTruthy();
  });

  it('should not render span element for deleting', async () => {
    const { container } = render(
      <Form onSubmit={() => {}}>
        { () => <Input name="sample" label="sample" inputType="text"/> }
      </Form>
    );
    expect(container.querySelector('span')).toBeFalsy()
  });
});
