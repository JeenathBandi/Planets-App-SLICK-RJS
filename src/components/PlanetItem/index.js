// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  console.log(planetsList)
  const {name, description, imageUrl} = planetsList
  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
