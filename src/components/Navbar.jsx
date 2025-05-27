import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MY WEBSITE
          </Typography>
          <Button color="inherit">
            <Link to={'/'} style={{color:'white'}}>Login</Link>
          </Button>
         <Button color="inherit">
            <Link to={'/r'} style={{color:'white'}}>Reg</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/t'} style={{color:'white'}}>Table</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/c'} style={{color:'white'}}>Card</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
