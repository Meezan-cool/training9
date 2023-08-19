import React from 'react'
import "./BodyDetail.css"
import Blur from '../../Imageslogo/blur 1.svg'
import Delete from '../../Imageslogo/delete 1.svg'
import Check from '../../Imageslogo/checked 1.svg'
const BodyDetail = ({data}) => {
  return (
    <div className='Body_detail'>
    <div className='sub_Body'>
      {data.map((item,id)=>{
      return(
           <div key={id} className='map_cont'>
            <div><img src={Blur} alt="" /></div>
           <div className='content'>
           {item.task.slice(0,60)}...
           </div>
           <div className='action_buttons'>
           <div><img src={Check} alt="" /></div>
           <div><img src={Delete} alt="" /></div>
           </div>
           </div>
      )
      })
      }
    </div>
</div>
  )
}

export default BodyDetail