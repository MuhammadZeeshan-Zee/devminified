import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material'
import { NavLink } from 'react-router-dom'
import LogoHome from './LogoHome'
import Adduser from './Adduser'
import Alluser from './Alluser'
const Head=styled(AppBar)`
background: #111111
`
let Navc=styled(NavLink)`
font-size:30px;
margin-left:20px;
color:inherit
`
function Navbar() {
  return (
    <div>
      <Head>
        <Toolbar>
        <Navc to='/'>Logo</Navc>
        <Navc to='/adduser'>Add user</Navc>
        <Navc to='/alluser'>All users</Navc>
        </Toolbar>
      </Head>
    </div>
  )
}

export default Navbar
