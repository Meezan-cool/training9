import React,{useState,useEffect} from 'react'
import ClipboardSvg from '../../Imageslogo/clipboard (1) 1 (1).svg';
import { useNavigate } from 'react-router-dom';
const All = () => {
  const [storageKey, setStorageKey] = useState('All'); 
  const [keyLength, setKeyLength] = useState(0); 

  useEffect(() => {
    if (storageKey) {
      const storedData = localStorage.getItem(storageKey);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
      setKeyLength(parsedData.length);
      } else {
        setKeyLength(0);
        setStorageKey('All')
      }
    }
  }, [storageKey]);
  const navigate=useNavigate()
  return (
    <div className='card card1' onClick={()=>navigate('/all')}>
     <img src={ClipboardSvg} alt="" />
      <div className="card_detail">
        <h2>All</h2>
        <p>{keyLength} Tasks</p>
      </div>
    </div>
  )
}

export default All