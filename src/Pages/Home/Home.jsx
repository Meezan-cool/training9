import React from 'react'
import House from '../../Imageslogo/house 1.svg'
const Home = () => {
  return (
    <div className='card card6'>
    {/* <i class="fa-solid fa-house"></i>                   */}
    <img src={House} alt="" />
    <div className="card_detail">
          <h2>Home</h2>
          <p>13 Tasks</p>
         </div>
    </div>
  )
}

export default Home