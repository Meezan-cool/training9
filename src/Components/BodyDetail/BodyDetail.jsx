import { useState, useEffect } from 'react';
import "./BodyDetail.css";
import Blur from '../../Imageslogo/blur 1.svg';
import Delete from '../../Imageslogo/delete 1.svg';
import Check from '../../Imageslogo/checked 1.svg';

const BodyDetail = ({ category }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [showTasks, setShowTasks] = useState([]);
  const [data, setData] = useState([]);
  const [start, setStart] = useState(false);
  const [showMessage, setShowMessage] = useState('');

  // useEffect for added data 
  useEffect(() => {
    const localStorageItem = localStorage.getItem(category);
    if (localStorageItem) {
      setData(JSON.parse(localStorageItem));
    }
    
    const keysToRetrieve = ['Work', 'Study', 'Travel', 'Shopping', 'Home'];
    const combinedData = keysToRetrieve.reduce((acc, key) => {
      const storedData = localStorage.getItem(key);
      if (storedData) {
        return acc.concat(JSON.parse(storedData));
      }
      return acc;
    }, []);

    localStorage.setItem('All', JSON.stringify(combinedData));
    localStorage.setItem('Category',category)
    setStart(true);
    // setCategory1(category);
  }, [start,category]);

  // Select chat line through
  const handleTaskClick = (id) => {
    const selectedTasksKey = `${category}_select`;
    const updatedSelectedTasks = selectedTasks.includes(id)
      ? selectedTasks.filter(taskId => taskId !== id)
      : [...selectedTasks, id];
    setSelectedTasks(updatedSelectedTasks);
    localStorage.setItem(selectedTasksKey, JSON.stringify(updatedSelectedTasks));
  };
  useEffect(() => {
    const storedSelectedTasks = JSON.parse(localStorage.getItem(`${category}_select`)) || [];
    setSelectedTasks(storedSelectedTasks);
  }, [selectedTasks, category]);

  // Delete the selected task
  const handleDeleteTask = (id) => {
    const updatedData = data.filter((item, idx) => idx !== id);
    setData(updatedData);
    setStart(!start);
    localStorage.setItem(category, JSON.stringify(updatedData));
    if (category === 'All') {
      setShowMessage('Successfully Deleted');
      setTimeout(() => setShowMessage(''), 1000);
    }
  };

  // Expand the task 
  const handleTaskShow = (id) => {
    setShowTasks(showTasks.includes(id) ? showTasks.filter(taskId => taskId !== id) : [...showTasks, id]);
  };
  const truncateText = (text, maxLength) => text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  // TO Delete the task from All
  const handleTask = (taskToDelete) => {
    const categories = ['Work', 'Travel', 'Shopping', 'Home', 'Study'];
  
     categories.forEach(category => {
     const localitem = localStorage.getItem(category);
     const tasks = JSON.parse(localitem) || [];
     console.log(tasks)

      const foundTask = tasks.find(task => JSON.stringify(task) === JSON.stringify(taskToDelete));
      // const updatedTasks = tasks.filter(task => task.task !== taskToDelete);
    
      if (foundTask) {
        console.log(category)
       console.log("Found:", foundTask);
       const updatefoundTasks = tasks.filter(task => JSON.stringify(task) !== JSON.stringify(foundTask));
       console.log(updatefoundTasks)
    localStorage.setItem(category,JSON.stringify(updatefoundTasks))
     } else {
       console.log("Task not found.");
     }
    });
  
  };
  

  return (
    <div className='Body_detail'>
      <div className='sub_Body'>
        {data.map((item, id) => {
          const isSelected = selectedTasks.includes(id);
          const isSelected1 = showTasks.includes(id);
          return (
            <div key={id} className={`map_cont ${isSelected ? 'selected' : ''}`}>
              <div><img src={Blur} alt="" /></div>
              <div className='content' onClick={() => {handleTaskShow(id);}}>
                {isSelected1 ? item.task : truncateText(item.task, 60)}
              </div>
              <div className='action_buttons'>
                <div><img src={Check} alt="" onClick={() => handleTaskClick(id)} /></div>
                <div><img src={Delete} alt="" onClick={() => {handleDeleteTask(id);handleTask(item)}} /></div>
              </div>
            </div>
          );
        })}
      </div>
      {showMessage && <div className='success_message'>{showMessage}</div>}
    </div>
  );
};

export default BodyDetail;

