import {  useState ,useEffect} from 'react';
import "./BodyDetail.css";
import Blur from '../../Imageslogo/blur 1.svg';
import Delete from '../../Imageslogo/delete 1.svg';
import Check from '../../Imageslogo/checked 1.svg';
const BodyDetail = ({ category }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [showTasks, setShowTasks] = useState([]);
  const [data, setData] = useState([]);
  // const [taskCount,setTaskCount]=useState(0)

// To get item from local Storage
  useEffect(() => {
    const localStorageItem = localStorage.getItem(category);
   
    if (localStorageItem) {
      const parsedData = JSON.parse(localStorageItem);
      setData(parsedData);
     
    }
  }, [category]);

  // To Check the task
  const handleTaskClick = (id) => {
    if (selectedTasks.includes(id)) {
      setSelectedTasks(selectedTasks.filter(taskId => taskId !== id));
    } else {
      setSelectedTasks([...selectedTasks, id]);
    }
  };

  // To Delete the task
  const handleDeleteTask = (id) => {
    const updatedData = data.filter((item, idx) => idx !== id);
    setData(updatedData);
    
    localStorage.setItem(category, JSON.stringify(updatedData));
   
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
  
  // console.log(taskCount)
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
    </div>
    
  );
};

export default BodyDetail;
