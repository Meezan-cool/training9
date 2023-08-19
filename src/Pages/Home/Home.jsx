import React from 'react'
import House from '../../Imageslogo/house 1.svg'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className='card card6' onClick={()=>navigate('/home')}>
    {/* <i class="fa-solid fa-house"></i>                   */}
    <img src={House} alt="" />
    <div className="card_detail">
          <h2>Home</h2>
          <p>13 Tasks</p>
         </div>
    </div>
  )
}

export default Home