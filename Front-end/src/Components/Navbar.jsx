import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div style={{display:"flex",alignItems:"center",gap:"1rem" ,justifyContent:"center",padding:"1rem" }}>
        <Link to='/'>Home</Link>
        <Link to='/signup' >Sign Up</Link>
        <Link to='/login'>Login</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/create">Create Notes</Link>

        
    </div>
  )
}

export default Navbar