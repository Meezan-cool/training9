import React from 'react'
import Travellogo from '../../../Imageslogo/world 1.svg';
import CardHeader from '../../../Components/Header/CardHeader/CardHeader'
import Returnlogo from '../../../Imageslogo/return 1.svg'
import BodyDetail from '../../../Components/BodyDetail/BodyDetail';
import CardFooter from '../../../Components/Footer/CardFooter/CardFooter';
const PageTravel = () => {
  // const data = [
  //   {
  //     task: "Buy groceries for the week and prepare meals for the family.",
  //   },
  //   {
  //     task: "Stream a new movie or TV show on a popular streaming platform.",
  //   },
  //   {
  //     task: "Stream a new movie or TV show on a popular streaming platform.",
  //   },
  //   {
  //     task: "Stream a new movie or TV show on a popular streaming platform.",
  //   },
  //   {
  //     task: "Stream a new movie or TV show on a popular streaming platform.",
  //   },
  //   {
  //     task: "Stream a new movie or TV show on a popular streaming platform.",
  //   },
  //   {
  //     task: "Stream a new movie or TV show on a popular streaming platform.",
  //   },
  //   {
  //     task: "Stream a new movie or TV show on a popular streaming platform.",
  //   },
  // ]
  return (
    // Main Screen
    <div className='All_container'>
      {/* Header */}
      <CardHeader route='/' returnlogo={Returnlogo} cardlogo={Travellogo} title="TRAVEL"/>
      {/* Body */}
      <BodyDetail category='Travel'/>
      {/* Footer */}
      <CardFooter/>
    </div>
  )
}

export default PageTravel