import React from 'react'
import './component.css'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'

function Navbar({user}) {
  const navigae = useNavigate()
  const logout = ()=>{
    Cookies.set("user", "")
    navigae('/login')

  }
  return (
    <div className='Navbar'>
        <div className='navbar_container'>
            <div className="username">
                Welcome  You <span className='user_name'>{user}</span> 
            </div>
            <button className='logout' onClick={logout}>Logout</button>

        </div>

    </div>
  )
}

export default Navbar