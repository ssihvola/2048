const addNumber = (newGrid) => {
  // Initialize a flag to track whether the number has been added
  let added = false;

  // Ensure that the number gets added
  while (!added) {
    let firstCoordinate = Math.floor(Math.random() * 4);
    let secondCoordinate = Math.floor(Math.random() * 4);

    // Check if the cell at the generated coordinates is empty (contains 0)
    if (newGrid[firstCoordinate][secondCoordinate] === 0) {
      // If the cell is empty, randomly assign either 2 or 4 to it
      newGrid[firstCoordinate][secondCoordinate] =
        Math.random() > 0.1 ? 2 : 4;

      // Set the flag to true to indicate that the number has been added
      added = true;
    }
  }
};

export default addNumber