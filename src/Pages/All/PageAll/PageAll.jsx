import React from 'react'
import ClipboardSvg from '../../../Imageslogo/clipboard (1) 1 (1).svg';
import Returnlogo from '../../../Imageslogo/return 1.svg'
import "./PageAll.css"
import CardHeader from '../../../Components/Header/CardHeader/CardHeader';
import BodyDetail from '../../../Components/BodyDetail/BodyDetail';
import CardFooter from '../../../Components/Footer/CardFooter/CardFooter';
const PageAll = () => {
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
    {
      task: "Listen to the latest episode of a popular podcast on your favorite topic.",
    },
    {
      task: "Participate in a virtual trivia night with friends via video call.",
    },
    {
      task: "Explore a virtual art exhibit from a renowned museum around the world.",
    },
    {
      task: "Research and plan a day trip to a nearby scenic location.",
    },
    {
      task: "Join an online book club and start reading the current selection.",
    },
    {
      task: "Try out a new mobile app that's gaining popularity in your area of interest.",
    },
    {
      task: "Discover new music by exploring a curated playlist on a music streaming platform.",
    },
    {
      task: "Go for a morning jog and do some stretching exercises afterward.",
    },
    {
      task: "Finish reading the new book and write a short summary of it.",
    },
    {
      task: "Attend the team meeting at work and provide updates on the current project.",
    },
    {
      task: "Call and catch up with a friend who you haven't spoken to in a while.",
    },
    {
      task: "Cook dinner for the family and try out a new recipe you found online.",
    },
    {
      task: "Water the plants in the garden and prune the overgrown ones.",
    },
    {
      task: "Clean out your closet and donate clothes you no longer wear.",
    },
    {
      task: "Practice playing a new song on your musical instrument for 30 minutes.",
    },
    {
      task: "Watch a documentary on a topic that interests you and take notes.",
    },
    {
      task: "Attend an online workshop to learn a new skill or hobby.",
    },
    {
      task: "Visit a local art gallery or museum to explore the latest exhibitions.",
    },
    {
      task: "Write a journal entry about your thoughts and experiences from the day.",
    },
    {
      task: "Volunteer at a local community event and help with setup and coordination.",
    },
    {
      task: "Spend quality time with family by playing board games or having a movie night.",
    },
    {
      task: "Create a budget for the upcoming month and track your expenses.",
    },
    {
      task: "Research and try a new recipe for a healthy and nutritious breakfast.",
    }, {
      task: "Plan a weekend hiking trip with friends and research nearby trails.",
    },
    {
      task: "Organize your desk and create a to-do list for the day.",
    },
    {
      task: "Take your pet for a walk in the park and enjoy the fresh air.",
    },
    {
      task: "Write a thank-you note to someone who helped you recently.",
    },
  ];
  return (
    // Main Screen
    <div className='All_container'>
      {/* Header */}
      <CardHeader route='/' returnlogo={Returnlogo} cardlogo={ClipboardSvg} title="ALL TASK" />
      {/* Body */}
      <BodyDetail data={data} />
      {/* Footer  */}
      <CardFooter />
    </div>
  )
}

export default PageAll