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
import { getByTestId } from '@testing-library/dom';
import Display from './Display';
import Control from '../controls/Controls';

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
      const { getByText } = render(<Display />);
      const { queryByText } = render(<Control />);
      // find the button
      const button = getByText(/Open/i);

      // click it
      fireEvent.click(button);

      // confirm that "hello developers" is there
      expect(queryByText(/Close/i)).toBeTruthy();
    });
  });
  describe('LEDS tests', () => {
    it('when locked or closed use the red-led class', () => {
        const { container } = render(<Display />);    
        const redLED = getByTestId(container, 'locked-unlocked')
    
        expect(redLED).toHaveClass('lock')
    });
    
    // it('when locked or closed use the red-led class', () => {
        
    // const deleteButton = document.querySelector('[data-testid="delete-button"]')
    
    // expect(deleteButton).toHaveClass('extra')
    // });
  });
});