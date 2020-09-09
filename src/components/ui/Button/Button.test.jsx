import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  test('Passes className to root element', () => {
    const element = shallow(<Button className="test">children</Button>);
    expect(element.props('className').className.includes('test')).toBe(true);
  });
});
