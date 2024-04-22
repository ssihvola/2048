const Block = ({ digit }) => {
  let backgroundColor;
  
  switch (digit) {
    case 2:
      backgroundColor = "#ADD8E6"; // Light blue
      break;
    case 4:
      backgroundColor = "#1E90FF"; // Royal blue
      break;
    case 8:
      backgroundColor = "#4682B4"; // Steel blue
      break;
    case 16:
      backgroundColor = "#6495ED"; // Cornflower blue
      break;
    case 32:
      backgroundColor = "#00BFFF"; // Deep sky blue
      break;
    case 64:
      backgroundColor = "#00CED1"; // Dark turquoise
      break;
    case 128:
      backgroundColor = "#00FF00"; // Green
      break;
    case 256:
      backgroundColor = "#32CD32"; // Lime green
      break;
    case 512:
      backgroundColor = "#ADFF2F"; // Green yellow
      break;
    case 1024:
      backgroundColor = "#FFA500"; // Orange
      break;
    case 2048:
      backgroundColor = "gold"; // Gold
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
