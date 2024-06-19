// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div data-testid="planets" className="planet-slider-container">
      <h1 className="planets-heading">PLANETS</h1>
      <Slider {...settings} className="slider-container">
        {planetsList.map(each => (
          <PlanetItem planetsList={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
