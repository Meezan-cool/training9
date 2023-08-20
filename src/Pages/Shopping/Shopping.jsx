import React,{useEffect,useState} from 'react'
import ShoppingOnline from '../../Imageslogo/online-shopping 1.svg';
import { useNavigate } from 'react-router-dom';
const Shopping = () => {
  const [storageKey, setStorageKey] = useState('Shopping'); 
  const [keyLength, setKeyLength] = useState(0); 

  useEffect(() => {
    if (storageKey) {
      const storedData = localStorage.getItem(storageKey);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
      setKeyLength(parsedData.length);
      } else {
        setKeyLength(0);
        setStorageKey('Shopping')
      }
    }
  }, [storageKey]);
  const navigate=useNavigate()
  return (
    <div className='card card8' onClick={()=>navigate('/shopping')}>
      <img src={ShoppingOnline} alt=""  />
      <div className="card_detail">
        <h2>Shopping</h2>
        <p>{keyLength} Tasks</p>
      </div>
    </div>
  )
}

export default Shopping