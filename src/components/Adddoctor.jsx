import React from 'react'
import { useState } from 'react'
import Home from './home'

function Adddoctor() {
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[gender,setGender] = useState('')  
    const[specialization,setSpecialization] = useState('')
    const[salary,setSalary] = useState('')

    const[newdoctor,setNewdoctor] = useState(null)
    function handleform(e){
        e.preventDefault()
        const formdata ={
            name,age,gender,specialization,salary, id:Date.now()
        }
     setNewdoctor(formdata)
        console.log(formdata)
        setName('')
        setAge('')
        setGender('')
        setSpecialization('')
        setSalary('')


        // let doctorobj = {
        //     name:name,
        //     age:age,
        //     gender:gender,
        //     specialization:specialization,
        //     salary:salary
        // }
        // console.log(doctorobj)
    }
  return (
    <div className='adddoctor'>
        <h2>Add Doctor</h2>
        <form className='adddoctorform' onSubmit={handleform}>
            <input value={name} type='text' className='form-control' placeholder='Enter DoctorName' onChange={e=>setName(e.target.value)} />
            <input value={age} type='text' className='form-control' placeholder='Enter Age' onChange={e=>setAge(e.target.value)} />
            <label>Select Gender</label>
            <select value={gender} onChange={e=>setGender(e.target.value)}>
                <option value=''>Select Gender</option>         
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
            <input value={specialization} type='text' className='form-control' placeholder='Enter Specialization' onChange={e=>setSpecialization(e.target.value)} />
            <input value={salary} type='text' className='form-control' placeholder='Enter your salary' onChange={e=>setSalary(e.target.value)} />
            <button type='submit'>Add Doctor</button>
        </form>
        <Home newdoctor={newdoctor} />
    </div>
  )
}


export default Adddoctor

