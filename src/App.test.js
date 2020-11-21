import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';


// TODO: fix all these, new test-library broke all
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hirvitalo/i);
  expect(linkElement).toBeInTheDocument();
});
