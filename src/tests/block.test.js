import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Block from '../components/Block';

describe('Block component', () => {
  test('renders with digit 2', () => {
    const { getByText } = render(<Block digit={2} />);
    const blockElement = getByText(/2/i);
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: #ADD8E6');
  });

  test('renders with digit 2048', () => {
    const { getByText } = render(<Block digit={2048} />);
    const blockElement = getByText(/2048/i);
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: gold');
  });
});
