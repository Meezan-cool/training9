import React from 'react'
import BodyDetail from '../../../Components/BodyDetail/BodyDetail';
import Worklogo from '../../../Imageslogo/briefcase (1) 1.svg';
import CardHeader from '../../../Components/Header/CardHeader/CardHeader'
import Returnlogo from '../../../Imageslogo/return 1.svg'
import CardFooter from '../../../Components/Footer/CardFooter/CardFooter';
const PageWork = () => {
  const data = [
    {
      task: "Buy groceries for the week and prepare meals for the family.",
    },
    {
      task: "Stream a new movie or TV show on a popular streaming platform.",
    },
    {
      task: "Join an online fitness class and work out from the comfort of your home.",
    },
    {
      task: "Try a trending recipe from a popular food blogger's website.",
    },
  ];
  return (
    // Main Screen
    <div className='All_container'>
      {/* Header */}
      <CardHeader route='/' returnlogo={Returnlogo} cardlogo={Worklogo} title="WORK"/>
      {/* Body */}
      <BodyDetail data={data}/>
      {/* Footer */}
      <CardFooter/>
    </div>
  )
}

export default PageWork