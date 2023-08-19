import React, { useState } from 'react';
import "./BodyDetail.css";
import Blur from '../../Imageslogo/blur 1.svg';
import Delete from '../../Imageslogo/delete 1.svg';
import Check from '../../Imageslogo/checked 1.svg';

const BodyDetail = ({ data }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleTaskClick = (id) => {
    if (selectedTasks.includes(id)) {
      setSelectedTasks(selectedTasks.filter(taskId => taskId !== id));
    } else {
      setSelectedTasks([...selectedTasks, id]);
    }
  };

  return (
    <div className='Body_detail'>
      <div className='sub_Body'>
        {data.map((item, id) => {
          const isSelected = selectedTasks.includes(id);
          return (
            <div key={id} className={`map_cont ${isSelected ? 'selected' : ''}`}>
              <div><img src={Blur} alt="" /></div>
              <div className='content'>
                {item.task.slice(0, 60)}...
              </div>
              <div className='action_buttons'>
                <div onClick={() => handleTaskClick(id)}>
                  <img src={Check} alt="" />
                </div>
                <div><img src={Delete} alt="" /></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyDetail;

// const [expandedTasks, setExpandedTasks] = useState([])
// const handleCheckClick = (id) => {
//   if (expandedTasks.includes(id)) {
//     setExpandedTasks(expandedTasks.filter(item => item !== id));
//   } else {
//     setExpandedTasks([...expandedTasks, id]);
//   }
// };
//<div className='content'>
//{expandedTasks.includes(id) ? item.task : item.task.slice(0, 60) + '...'}
//</div> 
