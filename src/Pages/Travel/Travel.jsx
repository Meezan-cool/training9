import React,{useState,useEffect} from 'react'
import Travellogo from '../../Imageslogo/world 1.svg';
import { useNavigate } from 'react-router-dom';
const Travel = () => {
  const [storageKey, setStorageKey] = useState('Travel'); 
  const [keyLength, setKeyLength] = useState(0); 

  useEffect(() => {
    if (storageKey) {
      const storedData = localStorage.getItem(storageKey);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
      setKeyLength(parsedData.length);
      } else {
        setKeyLength(0);
        setStorageKey('Travel')
      }
    }
  }, [storageKey]);
  const navigate=useNavigate()
  return (
    <div className='card card4' onClick={()=>navigate('/travel')}>
    {/* <i class="fa-solid fa-plane-departure"></i> */}
    <img src={Travellogo} alt=""  />
    <div className="card_detail">
          <h2>Travel</h2>
          <p>{keyLength} Tasks</p>
         </div>
    </div>
  )
}

export default Travel