import React,{useEffect,useState} from 'react'
import ClipboardSvg from '../../../Imageslogo/clipboard (1) 1 (1).svg';
import Returnlogo from '../../../Imageslogo/return 1.svg'
import "./PageAll.css"
import CardHeader from '../../../Components/Header/CardHeader/CardHeader';
import BodyDetail from '../../../Components/BodyDetail/BodyDetail';
import CardFooter from '../../../Components/Footer/CardFooter/CardFooter';
const PageAll = () => {
  const [data, setData] = useState(''); 

  useEffect(() => {
      const storedData = localStorage.getItem('Work');
      const storedData1 = localStorage.getItem('Study');
      const storedData2 = localStorage.getItem('Travel');
      const storedData3 = localStorage.getItem('Shopping');
      const storedData4 = localStorage.getItem('Home');
      if (storedData3 ) {
        const parsedData = JSON.parse(storedData);
        const parsedData1 = JSON.parse(storedData1);
        const parsedData2 = JSON.parse(storedData2);
        const parsedData3=JSON.parse(storedData3)
        const parsedData4=JSON.parse(storedData4)

        const combinedData = parsedData.concat(parsedData1);
        const combinedData1 = combinedData.concat(parsedData2);
        const combinedData2 = combinedData1.concat(parsedData3);
        const combinedData3 = combinedData2.concat(parsedData4);
      setData(combinedData3)
      localStorage.setItem('All', JSON.stringify(combinedData3));
      }
  }, []);
  return (
    // Main Screen
    <div className='All_container'>
      {/* Header */}
      <CardHeader route='/'  returnlogo={Returnlogo} cardlogo={ClipboardSvg} title="ALL TASK" />
      {/* Body */}
      <BodyDetail  category='All'  />
      {/* Footer  */}
      <CardFooter />
    </div>
  )
}

export default PageAll