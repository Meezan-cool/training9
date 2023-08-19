import React from 'react'
import { Link } from 'react-router-dom';
import ClipboardSvg from '../../Imageslogo/clipboard (1) 1 (1).svg';
const All = () => {
  return (
    <Link to='/all'>
    <div className='card card1'>
     {/* <i class="fa-solid fa-table-list"></i> */}
     <img src={ClipboardSvg} alt="" />
      <div className="card_detail">
        <h2>All</h2>
        <p>23 Tasks</p>
      </div>
    </div>
     </Link>
  )
}

export default All