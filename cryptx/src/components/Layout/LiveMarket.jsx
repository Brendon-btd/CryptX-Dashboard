import React from 'react'
import Live from '../../assets/Live Market.png'

function LiveMarket() {
  return (
    <div>
      <img src={Live} alt="LiveMarket" className='w-full h-auto object-contain group-hover:scale-110 transition-all duration-300'/>
    </div>
  )
}

export default LiveMarket