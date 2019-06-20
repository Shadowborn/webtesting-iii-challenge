// Test away!
// displays if gate is open/closed and if it is locked/unlocked
// displays 'Closed' if the closed prop is true and 'Open' if otherwise
// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class

import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';

import Display from './Display';
import Control from '../controls/Controls'

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Open button is there', () => {
    const { getByText } = render(<Display />);

    getByText(/Open/i);
  });

  it('Close button is there', () => {
    const { getByText } = render(<Control />);
        
    getByText(/Close/i);
  });

  describe('Open Gate Button', () => {
    it('says close gate', () => {
      const { getByText, queryByText } = render(<Display />);
      // find the button
      const button = getByText(/Close/i);

      // click it
      fireEvent.click(button);

      // confirm that "hello developers" is there
      expect(queryByText(/Open/i)).toBeTruthy();
    });
  });
});