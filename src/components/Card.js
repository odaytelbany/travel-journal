import React from 'react'
import cover from '../images/1.jpg'
import pin from '../images/pin.png'
function Card(props) {

  return (
    <div className='card'>
        <div className="card--cover">
          <img src={props.imageUrl} alt=""></img>
        </div>
        <div className='card--content'>
          <div className='location'>
              <img src={pin} alt=""></img>
              <h5 className='country'>{props.location}</h5>
              <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className='title'>{props.title}</h1>
          <div className='date'>{props.startDate} - {props.endDate}</div>
          <p className='description'>
            {props.description}
          </p>
        </div>
    </div>
  )
}


export default Card;