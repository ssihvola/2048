import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from '../components/Header';

// Mocking the pointCalculation function
jest.mock('../utils/pointCalculation', () => () => 500); // Mock to return 500 points

describe('Header component', () => {
  test('renders title and points correctly', () => {
    const { getByText } = render(<Header />);
    
    const titleElement = getByText('2048');
    expect(titleElement).toBeInTheDocument();

    const pointsElement = getByText('Points 500');
    expect(pointsElement).toBeInTheDocument();
  });
});
