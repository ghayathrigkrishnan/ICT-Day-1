import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const NavBar = () => {
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
         GHAYATHRI G KRISHNAN
          </Typography>
          <Button color="inherit">
            <Link to={'/'} style={{color:'white'}}>StateBasics</Link>
          </Button>
         <Button color="inherit">
            <Link to={'/e'} style={{color:'white'}}>Example</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/c'} style={{color:'white'}}>Counter</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/t'} style={{color:'white'}}>TextInput</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/d'} style={{color:'white'}}>DataForm</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/f'} style={{color:'white'}}>DataFetch</Link>
          </Button>
           <Button color="inherit">
            <Link to={'/a'} style={{color:'white'}}>DataCard</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
