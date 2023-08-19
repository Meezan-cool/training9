import React from 'react'
import Studylogo from '../../Imageslogo/book 1.svg';
import { useNavigate } from 'react-router-dom';
const Study = () => {
  const navigate=useNavigate()
  return (
    <div className='card card5' onClick={()=>navigate('/study')}>
      {/* <i class="fa-solid fa-book"></i> */}
      <img src={Studylogo} alt=""  />
      <div className="card_detail">
        <h2>Study</h2>
        <p>9 Tasks</p>
      </div>
    </div>
  )
}

export default Study