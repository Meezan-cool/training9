import React from 'react'
import "./Header.css"
import Menulogo from '../../Imageslogo/menu-_1_ 1 (1).svg';
const Header = () => {
  return (
    <div className='Head'>
      <div className='menu_logo'>
     <img src={Menulogo} alt="" style={{width:34,height:36}}/>
      </div>
        <div className='Head_detail'>
          <div className='position_head'>
          TODO LIST
          </div>
        </div>
    </div>
  )
}

export default Header