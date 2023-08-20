import React from 'react'
import ClipboardSvg from '../../../Imageslogo/clipboard (1) 1 (1).svg';
import Returnlogo from '../../../Imageslogo/return 1.svg'
import "./PageAll.css"
import CardHeader from '../../../Components/Header/CardHeader/CardHeader';
import BodyDetail from '../../../Components/BodyDetail/BodyDetail';
import CardFooter from '../../../Components/Footer/CardFooter/CardFooter';
const PageAll = () => {
 
  // const data=localStorage.getItem('Work')
  return (
    // Main Screen
    <div className='All_container'>
      {/* Header */}
      <CardHeader route='/'  returnlogo={Returnlogo} cardlogo={ClipboardSvg} title="ALL TASK" />
      {/* Body */}
      <BodyDetail  storageKeys={{ key1: 'Home', key2: 'Work', key3: 'Travel', key4: 'Shopping',key5:'Study' }}   />
      {/* Footer  */}
      <CardFooter />
    </div>
  )
}

export default PageAll