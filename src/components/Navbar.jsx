import './styles.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  let navigate=useNavigate()
  return (
    <nav>
        <h1>Doctor App</h1>
        <h3>
          <div>
             <button onClick={() => navigate('/')}>Home</button>
          </div>
          <div>
             <button onClick={() => navigate('/adddoctor')}>Add Doctor</button>
          </div>

        </h3>
       
    </nav>
  )
}

export default Navbar