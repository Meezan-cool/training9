import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import PageAll from '../Pages/All/PageAll/PageAll';
import PageArt from '../Pages/Art/PageArt/PageArt';
import Main from '../Components/Main/Main';
import Task from '../Components/Task/Task';

const Routing = () => {
  return (
    <Router>
        <Main/>
       <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route  path='/all' element={<PageAll/>}/>
        <Route  path='/art' element={<PageArt/>}/>
        <Route  path='/task' element={<Task/>}/>
       </Routes>
       </Router>
  )
}

export default Routing