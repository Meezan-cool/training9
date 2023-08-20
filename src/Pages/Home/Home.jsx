import React,{useState,useEffect} from 'react'
import House from '../../Imageslogo/house 1.svg'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [storageKey, setStorageKey] = useState('Home'); 
  const [keyLength, setKeyLength] = useState(0); 

  useEffect(() => {
    if (storageKey) {
      const storedData = localStorage.getItem(storageKey);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
      setKeyLength(parsedData.length);
      } else {
        setKeyLength(0);
        setStorageKey('Home')
      }
    }
  }, [storageKey]);
  const navigate=useNavigate()
  return (
    <div className='card card6' onClick={()=>navigate('/home')}>
    <img src={House} alt="" />
    <div className="card_detail">
          <h2>Home</h2>
          <p>{keyLength} Tasks</p>
         </div>
    </div>
  )
}

export default Home