import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import PageAll from '../Pages/All/PageAll/PageAll';
import PageArt from '../Pages/Art/PageArt/PageArt';
import Main from '../Components/Main/Main';
import Task from '../Components/Task/Task';
import PageWork from '../Pages/Work/PageWork/PageWork';
import PageHome from '../Pages/Home/PageHome/PageHome';
import PageShopping from '../Pages/Shopping/PageShopping/PageShopping';
import PageStudy from '../Pages/Study/PageStudy/PageStudy';
import PageTravel from '../Pages/Travel/PageTravel/PageTravel';

const Routing = () => {
  return (
    <Router>
        
       <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route  path='/all' element={<PageAll/>}/>
        <Route  path='/art' element={<PageArt/>}/>
        <Route  path='/task' element={<Task/>}/>
        <Route  path='/work' element={<PageWork/>}/>
        <Route  path='/home' element={<PageHome/>}/>
        <Route  path='/shopping' element={<PageShopping/>}/>
        <Route  path='/study' element={<PageStudy/>}/>
        <Route  path='/travel' element={<PageTravel/>}/>
        
       </Routes>
       </Router>
  )
}

export default Routing