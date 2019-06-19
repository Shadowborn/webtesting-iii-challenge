// Test away!
// displays if gate is open/closed and if it is locked/unlocked
// displays 'Closed' if the closed prop is true and 'Open' if otherwise
// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class

// 

import React from 'react'; 
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';
import "jest-dom/extend-expect";
import { Display } from './Display';

describe('Close Gate Controls Display', () => {
    it('Close Gate', () => {
      const { getByText, queryByText } = render(<Display />);
      // find the button
      const button = getByText(/Close Gate/i);
      const close = getByTestId("openClose");
      expect(close).toHaveClass("red-led");
      // click it
      fireEvent.click(button);

      // confirm 
      expect(queryByText(/Open Gate/i)).toBeTruthy();
    });
  });