import React from 'react'
import '../cards'
import JsBagde from '../assets/images/js-badge.svg'

const Card = (props) => {
  return (
    <div className={`Memory-Card${props.card.isFlipped ? " flip" : ""}`} style={{order: props.card.order}} onClick={props.onClick}>
        <img className='Frontface' src={props.card.image} />
        <img className='Backface' src={JsBagde} />
    </div>
  )
}

export default Card