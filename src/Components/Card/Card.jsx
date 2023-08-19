import React from 'react'
import "./Card.css"
// import Art from '../../Pages/Art/Art';
import Home from '../../Pages/Home/Home';
// import Music from '../../Pages/Music/Music';
import Shopping from '../../Pages/Shopping/Shopping';
import Study from '../../Pages/Study/Study';
import Travel from '../../Pages/Travel/Travel';
import Work from '../../Pages/Work/Work';
import All from '../../Pages/All/All';
const Card = () => {
  return (
    <div className='option_card'>
    <div className='option_card_container'>
      <All/>
      <Work />
      {/* <Music /> */}
      <Study />
      <Travel />
      <Shopping />
      <Home />
      {/* <Art /> */}
     
    </div>
  </div>
  )
}

export default Card