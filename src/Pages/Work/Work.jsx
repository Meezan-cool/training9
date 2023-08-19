import React from 'react'
import Worklogo from '../../Imageslogo/briefcase (1) 1.svg';
import { useNavigate } from 'react-router-dom';
const Work = () => {
  const navigate=useNavigate()
  return (
    <div className='card card2' onClick={()=>navigate('/work')}>
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