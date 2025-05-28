import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const DataForm = () => {
    var[input,setInput]=useState({});
    const inputHandler =(e)=>{
        setInput({...input,[e.target.name]: e.target.value});
        console.log(input);
    };
  return (
    <div>
      <TextField variant='outlined' label="username" onChange={inputHandler} name="Username"></TextField><br /><br />
      <TextField variant='outlined' label="password" onChange={inputHandler} name="Password" type='password'></TextField><br /><br />
      <Button variant='contained'>LOGIN</Button> 
    </div>
  )
}

export default DataForm
