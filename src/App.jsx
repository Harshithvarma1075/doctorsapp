import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Adddoctor from './components/Adddoctor'
import {useState} from 'react'
import {useEffect} from 'react'

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
      <Section />
      <div className='doctorcontainer'> 

      <Doctorcard src="https://cdn-icons-png.flaticon.com/512/9411/9411434.png" name='vasavi' specialization='psychology' gender='female'/>
      <Doctorcard src="https://cdn-icons-png.flaticon.com/512/9411/9411434.png" name='varma' specialization='cardiology' gender='male'/>
      <Doctorcard src="https://cdn-icons-png.flaticon.com/512/9411/9411434.png" name='harshith' specialization='neurology' gender='male'/>
      <Doctorcard src="https://cdn-icons-png.flaticon.com/512/9411/9411434.png" name='mohan' specialization='orthopedics' gender='male'/>
     
      
    </div>
    <Adddoctor/>
    </div>

    
  )
}

export default App