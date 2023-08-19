import React from 'react'
import ClipboardSvg from '../../Imageslogo/clipboard (1) 1 (1).svg';
import { useNavigate } from 'react-router-dom';
const All = () => {
  const navigate=useNavigate()
  return (
    <div className='card card1' onClick={()=>navigate('/all')}>
     <img src={ClipboardSvg} alt="" />
      <div className="card_detail">
        <h2>All</h2>
        <p>23 Tasks</p>
      </div>
    </div>
  )
}

export default All