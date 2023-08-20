import { useEffect,useState } from 'react';
import React from 'react'
import Worklogo from '../../Imageslogo/briefcase (1) 1.svg';
import { useNavigate } from 'react-router-dom';

const Work = () => {
  const [storageKey, setStorageKey] = useState('Work'); 
  const [keyLength, setKeyLength] = useState(0); 

  useEffect(() => {
    if (storageKey) {
      const storedData = localStorage.getItem(storageKey);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
      setKeyLength(parsedData.length);
      } else {
        setKeyLength(0);
        setStorageKey('Work')
      }
    }
  }, [storageKey]);
  const navigate=useNavigate()
  return (
    <div className='card card2' onClick={()=>navigate('/work')}>
      <img src={Worklogo} alt="" />
      <div className="card_detail">
        <h2>Work</h2>
        <p>{keyLength} Tasks</p>
      </div>
    </div>
  )
}

export default Work