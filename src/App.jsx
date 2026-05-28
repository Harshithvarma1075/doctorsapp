import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Adddoctor from './components/Adddoctor'
import {useState} from 'react'
import {useEffect} from 'react'
import {  Route, Routes} from 'react-router-dom'

function App() {

  // let[count,setCount] = useState(0)
  // function addcount(){
  //   setCount(count+1)
  //   console.log(count)
  // }

  // useEffect(() => {
  //   // Code to run after component mounts
  //   console.log('useEffect is running after component mounts');
  // })

  return (
    <div>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Section />} />
        <Route path='/adddoctor' element={<Adddoctor />} />

      </Routes>
     
      <div className='doctorcontainer'> 

      <Doctorcard src="https://cdn-icons-png.flaticon.com/512/9411/9411434.png" name='vasavi' specialization='psychology' gender='female'/>
      <Doctorcard src="https://cdn-icons-png.flaticon.com/512/9411/9411434.png" name='varma' specialization='cardiology' gender='male'/>
      <Doctorcard src="https://cdn-icons-png.flaticon.com/512/9411/9411434.png" name='harshith' specialization='neurology' gender='male'/>
      <Doctorcard src="https://cdn-icons-png.flaticon.com/512/9411/9411434.png" name='mohan' specialization='orthopedics' gender='male'/>
     
      
    </div>
    
    </div>

    
  )
}

export default App