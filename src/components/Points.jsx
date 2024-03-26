import pointCalculation from "../utils/pointCalculation"

const Points = () => {
  const points = pointCalculation();
  return <div className="points">Points {points}</div>
}

export default Points