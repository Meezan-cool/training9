import {  useState ,useEffect} from 'react';
import "./BodyDetail.css";
import Blur from '../../Imageslogo/blur 1.svg';
import Delete from '../../Imageslogo/delete 1.svg';
import Check from '../../Imageslogo/checked 1.svg';
const BodyDetail = ({ category }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [showTasks, setShowTasks] = useState([]);
  const [data, setData] = useState([]);
const[start,setStart]=useState(false)
const[showMessage,setShowMessage]=useState('') 

  useEffect(() => {
    const localStorageItem = localStorage.getItem(category);
   
    if (localStorageItem) {
      const parsedData = JSON.parse(localStorageItem);
      setData(parsedData);
    }
    if (category !== 'All' || category=== 'All') {
      // Array to store combined data
      let combinedData = [];
     
      // List of keys to retrieve data from
      const keysToRetrieve = ['Work','Study', 'Travel', 'Shopping', 'Home'];
    
      // Loop through keys and retrieve data
      keysToRetrieve.forEach(key => {
        const storedData = localStorage.getItem(key);
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          combinedData = combinedData.concat(parsedData);
        }
      });
      // const smallcategory=category.toLowerCase()
      
    
      // Store the combined data under the 'All' key
      localStorage.setItem('All', JSON.stringify(combinedData));
      setStart(true)

    }
    setStart(true)

  }, [start,category]);


 

  // To Check the task
  // const handleTaskClick = (id) => {
  //   if (selectedTasks.includes(id)) {
  //     setSelectedTasks(selectedTasks.filter(taskId => taskId !== id));
  //   } else {
  //     setSelectedTasks([...selectedTasks, id]);
  //   }
  // };
  const handleTaskClick = (id) => {
    let updatedSelectedTasks;
    if (selectedTasks.includes(id)) {
      updatedSelectedTasks = selectedTasks.filter(taskId => taskId !== id);
    } else {
      updatedSelectedTasks = [...selectedTasks, id];
    }
  
    setSelectedTasks(updatedSelectedTasks);
    localStorage.setItem('selectedTasks', JSON.stringify(updatedSelectedTasks));
  };
  useEffect(() => {
    const storedSelectedTasks = JSON.parse(localStorage.getItem('selectedTasks')) || [];
    setSelectedTasks(storedSelectedTasks);
  }, []);
  // To Delete the task
  const handleDeleteTask = (id) => {
    const updatedData = data.filter((item, idx) => idx !== id);
    setData(updatedData);
    setStart(!start)
    localStorage.setItem(category, JSON.stringify(updatedData));
    if(category==='All'){
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
          const isSelected1 = showTasks.includes(id);
          return (
            <div key={id} className={`map_cont ${isSelected ? 'selected' : ''}`}>
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

