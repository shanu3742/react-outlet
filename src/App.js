import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react'
import {BrowserRouter, Link, NavLink, Route, Routes} from  'react-router-dom'
import Home from './page/home';

function App() {
  let data= ['skill','eng','avg','kumar']
const [selectedTab,setSelectedTab]=useState('eng');
const [index,setSelectedIndex] = useState(1)

React.useEffect(() => {
  let dataIndex=data.indexOf(selectedTab);
  console.log(dataIndex)
  setSelectedIndex(dataIndex)
},[selectedTab])


const onItemClick=(e)=>{
  setSelectedTab(e)
}

  return (
    <div className='nav'>
    
     {
      data.map((el,i) => {
        return <div onClick={() =>onItemClick(el)} className={`nav-button ${i===index?'activeitem':  i===index-1?'first-sibiling-deactive-item':'other-sibiling-item'}`} style={{width:`${(100-0.5)/data.length}%`}}>
          <div className='left-part'>
            <div className='left-part-child'></div>
          </div>
          <div className='right-part'>
          <div className='right-part-child'></div>
          </div>
          {i!==index &&  i !==index-1 && <div className='inactive-div-border'>
            <div className='inactive-1'></div>
            <div className='inactive-2'>
              <div className='inactive-3'></div>
            </div>
            </div>}

          <div className='button'>{el}</div>
        </div>
      })
     }
       <div className='nav-border'></div>
    </div>
  );
}

export default App;
