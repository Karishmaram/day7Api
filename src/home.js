import React from 'react'
import About from './About'
import { Route,Routes ,Link} from 'react-router-dom'
import Hobbies from './Hobbies'
import Skills from './Skills'
import Contact from './contact'
import Plans from './plans'



export default function Home() {
  return (
    <div> 
   
    <div className='heading'>
    <h1><b>KARISHMA</b><br></br><b>SMILING QUEEEN</b>
    </h1>
    <br></br>
   
    <Link to="/about"><button className='btn  btn-warning'>About</button></Link>
    <Link to="/hobbies"><button className='btn btn-danger'>Hobbies</button></Link>
    <Link to="/plans"><button className='btn btn-success'>Plans</button></Link>
    <Link to="/skills"><button className='btn btn-primary'>Skills</button></Link>
    <Link to="/contact"><button className='btn btn-danger'>Contact</button></Link>
  
    <br></br><br></br>
    <hr></hr>
   
    </div>
    <Routes>
   <Route path ='/hobbies' element={<Hobbies/>} />
   <Route path ='/skills' element={<Skills/>} />
   <Route path ='/contact' element={<Contact/>} />
   <Route path ='/plans' element={<Plans/>} />
   <Route path ='/about' element={<About/>} />
   
    </Routes></div>
  
  )
}