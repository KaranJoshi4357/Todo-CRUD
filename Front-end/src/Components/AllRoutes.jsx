import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Notes from './Notes'
import CreateNote from './CreateNote'
import UpdateNote from './UpdateNote'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/update/:id" element={<UpdateNote />} />
      </Routes>
  )
}

export default AllRoutes