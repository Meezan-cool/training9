import React from 'react'
import Worklogo from '../../Imageslogo/briefcase (1) 1.svg';

const Work = () => {
  return (
    <div className='card card2'>
      {/* <i class="fa-solid fa-suitcase"></i> */}
      <img src={Worklogo} alt="" />
      <div className="card_detail">
        <h2>Work</h2>
        <p>19 Tasks</p>
      </div>
    </div>
  )
}

export default Work