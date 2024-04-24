import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Board from './Board';

describe('Board component', () => {
  test('renders correct number of rows and columns', () => {
    const gameGrid = [
      [2, 0, 4, 8],
      [0, 8, 0, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];

    const { container } = render(<Board gameGrid={gameGrid} />);
    const rows = container.querySelectorAll('.gameRow');
    
    // Asserting the number of rows
    expect(rows.length).toBe(4);
    
    // Asserting the number of columns in each row
    rows.forEach((row, rowIndex) => {
      const columns = row.querySelectorAll('.gameBlock');
      expect(columns.length).toBe(4);
    });
  });

  test('renders blocks with correct digits and positions', () => {
    const gameGrid = [
      [2, 0, 4, 8],
      [0, 8, 0, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];

    const { container } = render(<Board gameGrid={gameGrid} />);
    const blocks = container.querySelectorAll('.gameBlock');

    // Asserting the correct digits and positions
    expect(blocks[0]).toHaveTextContent('2');
    expect(blocks[1]).toHaveTextContent('');
    expect(blocks[2]).toHaveTextContent('4');
    expect(blocks[3]).toHaveTextContent('8');
    expect(blocks[4]).toHaveTextContent('');
    expect(blocks[5]).toHaveTextContent('8');
    expect(blocks[6]).toHaveTextContent('');
    expect(blocks[7]).toHaveTextContent('16');
    expect(blocks[8]).toHaveTextContent('16');
    expect(blocks[9]).toHaveTextContent('32');
    expect(blocks[10]).toHaveTextContent('64');
    expect(blocks[11]).toHaveTextContent('128');
    expect(blocks[12]).toHaveTextContent('256');
    expect(blocks[13]).toHaveTextContent('512');
    expect(blocks[14]).toHaveTextContent('1024');
    expect(blocks[15]).toHaveTextContent('2048');
  });
});
