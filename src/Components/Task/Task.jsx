// import React, { useEffect, useState } from 'react'
// import "./Task.css"
// import Picker from'emoji-picker-react';
// import { useNavigate } from 'react-router-dom'
// import Closelogo from "../../Imageslogo/close 1.svg"
// import Downarrrow from "../../Imageslogo/down-arrow 1.svg"
// // import { calculateNewValue } from '@testing-library/user-event/dist/utils'
// const Task = () => {
//     const [selectedItem, setSelectedItem] = useState('');
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [taskText, setTaskText] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [categoryMessage, setCategoryMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [showPicker,setShowPicker]=useState(false)
// //  Emoji Appylier
//     const onEmojiClick=(e)=>{
//         const sym=e.emoji.split("_")
//         console.log(sym)
//         setTaskText(taskText+sym)
//         // setShowPicker(false)
//     }
// // 
//     useEffect(() => {
//         const category = localStorage.getItem('Category')
//         console.log(category)
//         if (category === 'All') {
//             setSelectedItem('')
//         }
//         else {
//             setSelectedItem(category)
//             setShowDropdown(false)
//         }

//     }, [])

//     const options = ['Work', 'Study', 'Travel', 'Shopping', 'Home'];
//     const openDrop = () => {
//         const category = localStorage.getItem('Category')
//         if (category === 'All') 
//         {
//             setShowDropdown(!showDropdown)
//         }
//         else 
//         {
//             setShowDropdown(false)
//         }
//     }

// const addMsg=()=>{
//     const _id=new Date().getTime();
//     console.log(_id);
//     MyData={
//         id:_id,
//         msg:mgg,
//     }
//     // setTaskText([...data,myData])
// } 

//     const handleOptionClick = (option) => {
//         setSelectedItem(option);
//         setShowDropdown(false);
//     };
//     const navigate = useNavigate()
//     const handleCreateClick = () => {
//         if (!taskText || !selectedItem) {
//             if (!selectedItem) {
//                 setCategoryMessage('Please select a category.');

//             }
//             if (!taskText) {
//                 setErrorMessage('Please type your task.');
//             }
//         }
//         else {
//             setCategoryMessage('');
//             setErrorMessage('');
//             setSuccessMessage('Task added successfully.');
//             const existingTasks = JSON.parse(localStorage.getItem(selectedItem), ('All')) || [];
//             const newTask = { task: taskText };
//             existingTasks.push(newTask);
//             localStorage.setItem(selectedItem, JSON.stringify(existingTasks));
//             setTaskText('');
//             setTimeout(() => {
//             const smallcategory = selectedItem.toLowerCase();
//             navigate(`/${smallcategory}`)
//             setSuccessMessage('');
//             }, 1000);
//         }
//     };

//     return (
//         <div className='task_container'>

//             <div className='task_header'>
//                 <div className='logo_close'>
//                     <img src={Closelogo} alt="" onClick={() => navigate(-1)} />
//                 </div>
//                 <div className='heading'>ADD A TASK

//                 </div>
//             </div>
//             <div className='lower_container'>


//                 <div className='first_input_cont'>
//                     <div className='category_task'>Select a category</div>
//                     <div className='category_section'>
//                         <div className='select1' onClick={openDrop}>
//                             <img src={Downarrrow} alt="Dropdown Arrow" />
//                             <div className='selected_item'>{selectedItem}</div>
//                         </div>
//                         {categoryMessage ? <div className='error_message error_message1'>{categoryMessage}</div> : null}
//                         {showDropdown && (
//                             <div className={`dropdown_option ${categoryMessage ? 'dropdown_option_error' : 'dropdown_option'}`}>
//                                 <ul>
//                                     {options.map((option, index) => (
//                                         <li key={index} onClick={() => handleOptionClick(option)}>
//                                             {option}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <div className='second_input_cont'>
//                     <div className='input_header'>Type a task here
//                     <img src={require('./emoji.png')} alt="" onClick={()=>setShowPicker(!showPicker)}/></div>
//                     <div className='input_div'>
//                         <textarea
//                         type=''
//                             value={taskText}
//                             onChange={(e) => setTaskText(e.target.value)}
//                             required
//                         />

//                       {showPicker && (
//                 <div className='emoji_container'>
//                     <Picker 
//                     emojiStyle='100px'
//                     onEmojiClick={onEmojiClick}

//                     style={{width:'50%'}}
//                 />
//                 </div>
//             )}
//                     </div>
//                     {errorMessage ? <div className='error_message '>{errorMessage}</div> : null}

//                 </div>
//                 {successMessage && <div className='success_message'>{successMessage}</div>}


//                 <div className='crte_btn' onClick={() => { handleCreateClick() }}>CREATE</div>
//             </div>
//         </div>
//     )
// }

// export default Task

import React, { useEffect, useState } from 'react';
import "./Task.css";
import Picker from 'emoji-picker-react';
import { useNavigate } from 'react-router-dom';
import Closelogo from "../../Imageslogo/close 1.svg";
import Downarrrow from "../../Imageslogo/down-arrow 1.svg";

const Task = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [taskText, setTaskText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [categoryMessage, setCategoryMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [imgShower,setImgShower] = useState(false)

    const onEmojiClick = (e) => {
        const sym = e.emoji.split("_");
        setTaskText(taskText + sym);
        setShowPicker(false)
    }

    useEffect(() => {
        const category = localStorage.getItem('Category');
        if (category === 'All') {
            setSelectedItem('');
            setImgShower(true);
        } else {
            setSelectedItem(category);
            setShowDropdown(false);
            setImgShower(false);
        }
    }, []);

    const options = ['Work', 'Study', 'Travel', 'Shopping', 'Home'];

    const openDrop = () => {
        const category = localStorage.getItem('Category');
        setShowDropdown(category === 'All' ? !showDropdown : false);
        // setImgShower(category === 'All' ? true : false);
    }

    const addMsg = () => {
        const taskId = new Date().getTime();
        const newTask = { id: taskId, msg: taskText };
        const existingTasks = JSON.parse(localStorage.getItem(selectedItem)) || [];
        existingTasks.push(newTask);
        localStorage.setItem(selectedItem, JSON.stringify(existingTasks));
    }

    const handleOptionClick = (option) => {
        setSelectedItem(option);
        setShowDropdown(false);
    };

    const navigate = useNavigate();

    const handleCreateClick = () => {
        if (!taskText || !selectedItem) {
            if (!selectedItem) {
                setCategoryMessage('Please select a category.');
            }
            if (!taskText) {
                setErrorMessage('Please type your task.');
            }
        } else {
            setCategoryMessage('');
            setErrorMessage('');
            setSuccessMessage('Task added successfully.');
            addMsg();
            setTaskText('');
            setTimeout(() => {
                // const smallcategory = selectedItem.toLowerCase();
                // navigate(`/${smallcategory}`);
                navigate(-1);
                setSuccessMessage('');
            }, 1000);
        }
    };

    return (
        <div className='task_container'>
            <div className='task_header'>
                <div className='logo_close'>
                    <img src={Closelogo} alt="" onClick={() => navigate(-1)} />
                </div>
                <div className='heading'>ADD A TASK

                </div>
            </div>
            <div className='lower_container'>


                <div className='first_input_cont'>
                    <div className='category_task'>Select a category</div>
                    <div className='category_section'>
                        <div className='select1' onClick={openDrop}>
                            {/* <img src={Downarrrow} alt="Dropdown Arrow" /> */}
                            {imgShower? <img src={Downarrrow} alt="Dropdown Arrow" /> :null}
                            
                            <div className='selected_item'>{selectedItem}</div>
                        </div>
                        {categoryMessage ? <div className='error_message error_message1'>{categoryMessage}</div> : null}
                        {showDropdown && (
                            <div className={`dropdown_option ${categoryMessage ? 'dropdown_option_error' : 'dropdown_option'}`}>
                                <ul>
                                    {options.map((option, index) => (
                                        <li key={index} onClick={() => handleOptionClick(option)}>
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className='second_input_cont'>
                    <div className='input_header'>Type a task here
                        <img src={require('./emoji.png')} alt="" onClick={() => setShowPicker(!showPicker)} /></div>
                    <div className='input_div'>
                        <textarea
                            type=''
                            value={taskText}
                            onChange={(e) => setTaskText(e.target.value)}
                            required
                        />

                        {showPicker && (
                            <div className='emoji_container'>
                                <Picker
                                    emojiStyle='100px'
                                    onEmojiClick={onEmojiClick}

                                    style={{ width: '50%' }}
                                />
                            </div>
                        )}
                    </div>
                    {errorMessage ? <div className='error_message '>{errorMessage}</div> : null}

                </div>
                {successMessage && <div className='success_message'>{successMessage}</div>}


                <div className='crte_btn' onClick={() => { handleCreateClick() }}>CREATE</div>
            </div>
        </div>
    );
}

export default Task;
