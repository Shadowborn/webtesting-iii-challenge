// Test away
// shows the controls and display
import React from 'react'; 
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard';

describe('Close Gate Button', () => {
    it('Close Gate', () => {
      const { getByText, queryByText } = render(<Dashboard />);
      // find the button
      const button = getByText(/Close Gate/i);

      // click it
      fireEvent.click(button);

      // confirm that "hello developers" is there
      expect(queryByText(/Open Gate/i)).toBeTruthy();
    });
  });