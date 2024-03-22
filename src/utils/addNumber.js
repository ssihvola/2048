const addNumber = (newGrid) => {
  let added = false;

  // Ensure that the number gets added
  while (!added) {
    let firstCoordinate = Math.floor(Math.random() * 4);
    let secondCoordinate = Math.floor(Math.random() * 4);
    if (newGrid[firstCoordinate][secondCoordinate] === 0) {
      newGrid[firstCoordinate][secondCoordinate] =
        Math.random() > 0.1 ? 2 : 4;
      added = true;
    }
  }
};

export default addNumber