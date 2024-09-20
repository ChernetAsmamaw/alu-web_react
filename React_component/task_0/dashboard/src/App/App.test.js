import React from "react";
import React from "react";
import { render } from '@testing-library/react';
import App from './App';

test('renders Login component when not logged in', () => {
  const { getByText } = render(<App isLoggedIn={false} />);
  expect(getByText(/login/i)).toBeInTheDocument();
});

test('renders CourseList component when logged in', () => {
  const { getByText } = render(<App isLoggedIn={true} />);
  expect(getByText(/course list/i)).toBeInTheDocument();
});
