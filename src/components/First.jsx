import React from 'react'
import { Button, TextField, Typography } from "@mui/material"

const First = () => {
  return (
    <div>
      <h1>WELCOME TO LOGIN PAGE</h1>
      <input type="text" placeholder='USERNAME' /><br />
      <input type="password" placeholder='PASSWORD' /><br />
      <button>LOGIN</button> 
       <br />
       <br />
       <br />
      <div>
        <Typography variant='h1'>Welcome to login page</Typography>
       <TextField variant='outlined' label='username'/><br /><br />
       <TextField variant='filled' label='username'/><br /><br />
       <TextField variant='standard' label='username'/>  
       <Button variant='text'/> 
      </div>
    </div>


  )
}

export default First
