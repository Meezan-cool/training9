import React,{useState} from 'react'

function Login() {
  const [data, setData] = useState(null)

  function submitData() {
    const obj = {
      username: document.getElementById('username').value,
      mobileNo: document.getElementById('mobileNo').value,
      email: document.getElementById('email').value,
      
    }

    
    if (data) {
     
      const existingData = JSON.parse(data)
      existingData.username = obj.username
      existingData.mobileNo = obj.mobileNo
      existingData.email = obj.email

      localStorage.setItem('data', JSON.stringify(existingData))
    } else {
     
      localStorage.setItem('data', JSON.stringify(obj))
    }
  }
  

  return (
    <div className='MBody'>
      <h1>
        Enter User Details
      </h1>
      <form action="">
        <input type="text" placeholder='Enter Username' required id="username" />
        <input type="number"  placeholder='Enter mobile no.' required id="mobileNo" />
        <input type="email" placeholder='Enter Email' required id="email" />
        <button type='submit' onClick={submitData}
        >Submit</button>
      </form>
    </div>
  )
}

export default Login