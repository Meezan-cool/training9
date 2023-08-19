import React from 'react'
import Travellogo from '../../Imageslogo/world 1.svg';
const Travel = () => {
  return (
    <div className='card card4'>
    {/* <i class="fa-solid fa-plane-departure"></i> */}
    <img src={Travellogo} alt=""  />
    <div className="card_detail">
          <h2>Travel</h2>
          <p>21 Tasks</p>
         </div>
    </div>
  )
}

export default Travel