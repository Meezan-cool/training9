import React from 'react'
import BodyDetail from '../../../Components/BodyDetail/BodyDetail';
import Worklogo from '../../../Imageslogo/briefcase (1) 1.svg';
import CardHeader from '../../../Components/Header/CardHeader/CardHeader'
import Returnlogo from '../../../Imageslogo/return 1.svg'
import CardFooter from '../../../Components/Footer/CardFooter/CardFooter';
const PageWork = () => {

  return (
    // Main Screen
    <div className='All_container'>
      {/* Header */}
      <CardHeader route='/' returnlogo={Returnlogo} cardlogo={Worklogo} title="WORK"/>
      {/* Body */}
      <BodyDetail category='Work'/>
      {/* Footer */}
      <CardFooter/>
    </div>
  )
}

export default PageWork