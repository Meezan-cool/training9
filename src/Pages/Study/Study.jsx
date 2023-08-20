import React,{useEffect,useState} from 'react'
import Studylogo from '../../Imageslogo/book 1.svg';
import { useNavigate } from 'react-router-dom';
const Study = () => {
  const [storageKey, setStorageKey] = useState('Study'); 
  const [keyLength, setKeyLength] = useState(0); 

  useEffect(() => {
    if (storageKey) {
      const storedData = localStorage.getItem(storageKey);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
      setKeyLength(parsedData.length);
      } else {
        setKeyLength(0);
        setStorageKey('Study')
      }
    }
  }, [storageKey]);
  const navigate=useNavigate()
  return (
    <div className='card card5' onClick={()=>navigate('/study')}>
      {/* <i class="fa-solid fa-book"></i> */}
      <img src={Studylogo} alt=""  />
      <div className="card_detail">
        <h2>Study</h2>
        <p>{keyLength} Tasks</p>
      </div>
    </div>
  )
}

export default Study