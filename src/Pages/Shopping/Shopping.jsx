import React from 'react'
import ShoppingOnline from '../../Imageslogo/online-shopping 1.svg';
import { useNavigate } from 'react-router-dom';
const Shopping = () => {
  const navigate=useNavigate()
  return (
    <div className='card card8' onClick={()=>navigate('/shopping')}>
      <img src={ShoppingOnline} alt=""  />
      <div className="card_detail">
        <h2>Shopping</h2>
        <p>17 Tasks</p>
      </div>
    </div>
  )
}

export default Shopping