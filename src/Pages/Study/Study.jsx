import React from 'react'
import Studylogo from '../../Imageslogo/book 1.svg';

const Study = () => {
  return (
    <div className='card card5'>
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