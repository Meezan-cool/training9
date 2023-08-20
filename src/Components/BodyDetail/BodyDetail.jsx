import { useState, useEffect } from 'react';
import "./BodyDetail.css";
import Blur from '../../Imageslogo/blur 1.svg';
import Delete from '../../Imageslogo/delete 1.svg';
import Check from '../../Imageslogo/checked 1.svg';
const BodyDetail = ({ category }) => {
  const [selectedTasks, setSelectedTasks] = useState([]); //All
  const [selectedTasks1, setSelectedTasks1] = useState([]);//Work
  const [selectedTasks2, setSelectedTasks2] = useState([]);//study
  const [selectedTasks3, setSelectedTasks3] = useState([]);//travel
  const [selectedTasks4, setSelectedTasks4] = useState([]);//shopping
  const [selectedTasks5, setSelectedTasks5] = useState([]);//home
  const [showTasks, setShowTasks] = useState([]);
  const [data, setData] = useState([]); //Mapping Data 
  const [start, setStart] = useState(false) //Dependency
  const [showMessage, setShowMessage] = useState('') //Message of Failed

  // Data Refresh
  useEffect(() => {
    const localStorageItem = localStorage.getItem(category);
    if (localStorageItem) {
      const parsedData = JSON.parse(localStorageItem);
      setData(parsedData);
    }
    if (category !== 'All' || category === 'All') {
      // Array to store combined data
      let combinedData = [];

      // List of keys to retrieve data from
      const keysToRetrieve = ['Work', 'Study', 'Travel', 'Shopping', 'Home'];

      // Loop through keys and retrieve data
      keysToRetrieve.forEach(key => {
        const storedData = localStorage.getItem(key);
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          combinedData = combinedData.concat(parsedData);
        }
      });
      localStorage.setItem('All', JSON.stringify(combinedData));
      setStart(true)
    }
    setStart(true)
  }, [start, category]);

  // Select Task Check
  const handleTaskClick = (id) => {
    //All
    if (category === 'All') {
      let updatedSelectedTasks;
      if (selectedTasks.includes(id)) {
        updatedSelectedTasks = selectedTasks.filter(taskId => taskId !== id);
      } else {
        updatedSelectedTasks = [...selectedTasks, id];
      }
      setSelectedTasks(updatedSelectedTasks);
      localStorage.setItem('All_select', JSON.stringify(updatedSelectedTasks));
    }
    // Work
    else if (category === 'Work') {
      let updatedSelectedTasks;
      if (selectedTasks1.includes(id)) {
        updatedSelectedTasks = selectedTasks1.filter(taskId => taskId !== id);
      } else {
        updatedSelectedTasks = [...selectedTasks1, id];
      }
      setSelectedTasks1(updatedSelectedTasks);
      localStorage.setItem('Work_select', JSON.stringify(updatedSelectedTasks));
    }
    // Study
    else if (category === 'Study') {
      let updatedSelectedTasks;
      if (selectedTasks2.includes(id)) {
        updatedSelectedTasks = selectedTasks2.filter(taskId => taskId !== id);
      } else {
        updatedSelectedTasks = [...selectedTasks2, id];
      }
      setSelectedTasks2(updatedSelectedTasks);
      localStorage.setItem('Study_select', JSON.stringify(updatedSelectedTasks));
    }
    // Travel
    else if (category === 'Travel') {
      let updatedSelectedTasks;
      if (selectedTasks3.includes(id)) {
        updatedSelectedTasks = selectedTasks3.filter(taskId => taskId !== id);
      } else {
        updatedSelectedTasks = [...selectedTasks3, id];
      }
      setSelectedTasks3(updatedSelectedTasks);
      localStorage.setItem('Travel_select', JSON.stringify(updatedSelectedTasks));
    }
    //  Shopping
    else if (category === 'Shopping') {
      let updatedSelectedTasks;
      if (selectedTasks4.includes(id)) {
        updatedSelectedTasks = selectedTasks4.filter(taskId => taskId !== id);
      } else {
        updatedSelectedTasks = [...selectedTasks4, id];
      }
      setSelectedTasks4(updatedSelectedTasks);
      localStorage.setItem('Shopping_select', JSON.stringify(updatedSelectedTasks));
    }
    //  Home
    else if (category === 'Home') {
      let updatedSelectedTasks;
      if (selectedTasks5.includes(id)) {
        updatedSelectedTasks = selectedTasks5.filter(taskId => taskId !== id);
      } else {
        updatedSelectedTasks = [...selectedTasks5, id];
      }
      setSelectedTasks5(updatedSelectedTasks);
      localStorage.setItem('Home_select', JSON.stringify(updatedSelectedTasks));
    }

  };
  useEffect(() => {
    // const storedSelectedTasks = JSON.parse(localStorage.getItem('selectedTasks')) || [];
    if (category === 'All') {
      const storedSelectedTasks = JSON.parse(localStorage.getItem('All_select')) || [];
      setSelectedTasks(storedSelectedTasks);
    }
    else if (category === 'Work') {
      const storedSelectedTasks = JSON.parse(localStorage.getItem('Work_select')) || [];
      setSelectedTasks1(storedSelectedTasks);
    }
    else if (category === 'Study') {
      const storedSelectedTasks = JSON.parse(localStorage.getItem('Study_select')) || [];
      setSelectedTasks2(storedSelectedTasks);
    }
    else if (category === 'Travel') {
      const storedSelectedTasks = JSON.parse(localStorage.getItem('Travel_select')) || [];
      setSelectedTasks3(storedSelectedTasks);
    }
    else if (category === 'Shopping') {
      const storedSelectedTasks = JSON.parse(localStorage.getItem('Shopping_select')) || [];
      setSelectedTasks4(storedSelectedTasks);
    }
    else if (category === 'Home') {
      const storedSelectedTasks = JSON.parse(localStorage.getItem('Home_select')) || [];
      setSelectedTasks5(storedSelectedTasks);
    }
  }, [selectedTasks,category]);

  // To Delete the task
  const handleDeleteTask = (id) => {
    const updatedData = data.filter((item, idx) => idx !== id);
    setData(updatedData);
    setStart(!start)
    localStorage.setItem(category, JSON.stringify(updatedData));
    if (category === 'All') {
      setShowMessage('Failed to delete task from here.')
      setTimeout(() => {
        setShowMessage('');
      }, 500);
    }
  }

  // To expand the task when Click
  const handleTaskShow = (id) => {
    if (showTasks.includes(id)) {
      setShowTasks(showTasks.filter(taskId => taskId !== id));

    } else {
      setShowTasks([...showTasks, id]);
    }
  };
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (

    <div className='Body_detail'>
      <div className='sub_Body'>
        {data.map((item, id) => {
          const isSelected = selectedTasks.includes(id);
          const isSelected2 = selectedTasks1.includes(id);
          const isSelected3 = selectedTasks2.includes(id);
          const isSelected4 = selectedTasks3.includes(id);
          const isSelected5 = selectedTasks4.includes(id);
          const isSelected6 = selectedTasks5.includes(id);
          const isSelected1 = showTasks.includes(id);
          return (
            <div key={id} className={`map_cont ${isSelected || isSelected2 || isSelected3 || isSelected4 || isSelected5 || isSelected6 ? 'selected' : ''}`}>
              <div><img src={Blur} alt="" /></div>
              <div className='content' onClick={() => handleTaskShow(id)}>
                {isSelected1 ? item.task : truncateText(item.task, 60)}
              </div>
              <div className='action_buttons'>
                <div >
                  <img src={Check} alt="" onClick={() => handleTaskClick(id)} />
                </div>
                <div><img src={Delete} alt="" onClick={() => handleDeleteTask(id)} /></div>
              </div>
            </div>
          );
        })}

      </div>
      {showMessage && <div className='failed_message'>{showMessage}</div>}
    </div>

  );
};

export default BodyDetail;

