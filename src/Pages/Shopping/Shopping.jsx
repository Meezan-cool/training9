import React from 'react'
import ShoppingOnline from '../../Imageslogo/online-shopping 1.svg';

const Shopping = () => {
  return (
    <div className='card card8'>
      {/* <i class="fa-solid fa-cart-shopping"></i>                  */}
      <img src={ShoppingOnline} alt=""  />

      <div className="card_detail">
        <h2>Shopping</h2>
        <p>17 Tasks</p>
      </div>
    </div>
  )
}

export default Shopping