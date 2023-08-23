import React from 'react'
import "./CardFooter.css"
import Pluslogo from "../../../Imageslogo/plus 1.svg"
import { useNavigate } from 'react-router-dom'
const CardFooter = () => {
    const navigate = useNavigate();
  return (
    <div className='footer_pageall'>
        <div className='plus_cont' onClick={()=>navigate('/task')}>
          <img src={Pluslogo} alt="" />
        </div>
       
      </div>
  )
}

export default CardFooter