import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../index.css'
import { cardData } from '../cards'

const Game = () => {
  const [data, setData] = useState(cardData);
  const [countClick,setCountClick] = useState(0);
  const [clickedCard, setClickedCard] = useState ([]);
  const handleFlipped = (id,flip) => {
    setData(prev => prev.map((card) => 
        card.id === id ? {...card, isFlipped : flip} : card
        )
    )
  }

  const handleClick = (id) => {
    setClickedCard(prev => [...prev,data[id-1]]);
    setCountClick(prev => prev +1);
    if(countClick < 2) {
        handleFlipped(id, true)
    }
}


useEffect(() => {
    if(countClick === 2) {
        setTimeout(() => {
            if (clickedCard[0].name != clickedCard[1].name) {
                handleFlipped(clickedCard[0].id, false);
                handleFlipped(clickedCard[1].id, false);
            }
            setCountClick(0);
            setClickedCard([]);
        }, 1500);
    }
},[countClick]);


  return (
    <div className='GameBoard'>
        {data.map((card, index) =>(
            <Card key={index} card={card} onClick = {() => handleClick(card.id)} />
        ))}
    </div>
  )
}

export default Game