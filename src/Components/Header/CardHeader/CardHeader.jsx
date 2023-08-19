import React from 'react'
import { useNavigate } from 'react-router-dom'

import './CardHeader.css'
const CardHeader = ({route,returnlogo,cardlogo,title}) => {
    const navigate=useNavigate()
  return (
    <div className='header'>
    {/* Return Logo */}
    <div className='return_logo'>
    <img src={returnlogo} alt="" onClick={()=>navigate(route)} />

  </div>
  {/* Head Part  */}
  <div className='Head_detailss'>
    <div className='position_head'>
      {title}
      <img src={cardlogo} alt="" />
    </div>
  </div>

</div>
  )
}

export default CardHeader