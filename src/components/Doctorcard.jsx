import React from 'react'

function Doctorcard(props) {
  const imageSrc = props.src || 'https://cdn-icons-png.flaticon.com/512/9411/9411434.png'

  return (
    <div className='doctorcard'>
        <img src={imageSrc} width='100' alt={props.name || 'doctor'} />
        <h2>{props.name}</h2>
        <div>{props.specialization}</div>
        <p>{props.gender}</p>
        <button>View more</button>
    </div>
  )
}

export default Doctorcard