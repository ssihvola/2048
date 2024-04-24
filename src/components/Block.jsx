const Block = ({ digit }) => {
  let backgroundColor;
  
  switch (true) {
    case digit >= 2048:
      backgroundColor = "gold"; // Gold for digits 2048 and above
      break;
    case digit === 2:
      backgroundColor = "#ADD8E6"; // Light blue
      break;
    case digit === 4:
      backgroundColor = "#1E90FF"; // Royal blue
      break;
    case digit === 8:
      backgroundColor = "#4682B4"; // Steel blue
      break;
    case digit === 16:
      backgroundColor = "#6495ED"; // Cornflower blue
      break;
    case digit === 32:
      backgroundColor = "#00BFFF"; // Deep sky blue
      break;
    case digit === 64:
      backgroundColor = "#00CED1"; // Dark turquoise
      break;
    case digit === 128:
      backgroundColor = "#00FF00"; // Green
      break;
    case digit === 256:
      backgroundColor = "#32CD32"; // Lime green
      break;
    case digit === 512:
      backgroundColor = "#ADFF2F"; // Green yellow
      break;
    case digit === 1024:
      backgroundColor = "#FFA500"; // Orange
      break;
    default:
      backgroundColor = "azure"; // Azure for empty tiles
      break;
  }

  return (
    <div className="gameBlock" style={{ backgroundColor }}>
      {digit}
    </div>
  );
}

export default Block;
