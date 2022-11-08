import React, {useContext, useState} from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../header/Search.js';

test('renders learn react link', () => {
  render(<Search />);
  const searchElement = screen.getByTestId('search-testId');
  expect(searchElement).toBeInTheDocument();
});