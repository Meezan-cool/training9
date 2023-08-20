import React from 'react'
import Studylogo from '../../../Imageslogo/book 1.svg';
import Returnlogo from '../../../Imageslogo/return 1.svg'
import CardHeader from '../../../Components/Header/CardHeader/CardHeader';
import BodyDetail from '../../../Components/BodyDetail/BodyDetail';
import CardFooter from '../../../Components/Footer/CardFooter/CardFooter';
const PageStudy = () => {
  // const data = [
  //   {
  //     task: "Buy groceries for the week and prepare meals for the family.",
  //   },
  //   {
  //     task: "Stream a new movie or TV show on a popular streaming platform.",
  //   },
  // ]
  return (
    // Main Screen
    <div className='All_container'>
      {/* Header */}
      <CardHeader route='/' returnlogo={Returnlogo} cardlogo={Studylogo} title="STUDY" />
      {/* Body */}
      <BodyDetail category='Study'/>
      {/* Footer */}
      <CardFooter/>
    </div>
  )
}

export default PageStudy