import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Block from '../components/Block';

describe('Block component', () => {
  test('renders a block with digit 2', () => {
    const { getByText } = render(<Block digit={2} />);
    const blockElement = getByText('2');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: #ADD8E6');
  });

  test('renders a block with digit 4', () => {
    const { getByText } = render(<Block digit={4} />);
    const blockElement = getByText('4');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: #1E90FF');
  });

  test('renders a block with digit 8', () => {
    const { getByText } = render(<Block digit={8} />);
    const blockElement = getByText('8');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: #4682B4');
  });

  test('renders a block with digit 16', () => {
    const { getByText } = render(<Block digit={16} />);
    const blockElement = getByText('16');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: #6495ED');
  });

  test('renders a block with digit 32', () => {
    const { getByText } = render(<Block digit={32} />);
    const blockElement = getByText('32');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: #00BFFF');
  });

  test('renders a block with digit 64', () => {
    const { getByText } = render(<Block digit={64} />);
    const blockElement = getByText('64');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: #00CED1');
  });

  test('renders a block with digit 128', () => {
    const { getByText } = render(<Block digit={128} />);
    const blockElement = getByText('128');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: #00FF00');
  });

  test('renders a block with digit 256', () => {
    const { getByText } = render(<Block digit={256} />);
    const blockElement = getByText('256');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: #32CD32');
  });

  test('renders a block with digit 512', () => {
    const { getByText } = render(<Block digit={512} />);
    const blockElement = getByText('512');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: #ADFF2F');
  });

  test('renders a block with digit 1024', () => {
    const { getByText } = render(<Block digit={1024} />);
    const blockElement = getByText('1024');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: #FFA500');
  });

  test('renders a block with digit 2048', () => {
    const { getByText } = render(<Block digit={2048} />);
    const blockElement = getByText('2048');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: gold');
  });

  test('renders a block with digit 4096', () => {
    const { getByText } = render(<Block digit={4096} />);
    const blockElement = getByText('4096');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: gold');
  });

  test('renders an empty block', () => {
    const { getByText } = render(<Block digit={0} />);
    const blockElement = getByText('0');
    expect(blockElement).toBeInTheDocument();
    expect(blockElement).toHaveStyle('background-color: azure');
  });
});
