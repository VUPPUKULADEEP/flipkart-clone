import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './header.css'
import logo from "../../assets/logo.png"
import subimage from '../../assets/subimage.png'
import Typography from '@mui/material/Typography';

const Header = () => {
  
  return (
    <>
    <AppBar sx={{backgroundColor: '#2874f0', height:'55px'}}>
      <Toolbar>
        <Box  sx={{lineHeight : '0', marginLeft: '12%'}}>
            <img src={logo} alt="flipkart" style={{width : 75}}/>
            
              <Typography  sx={{ fontSize: '10px' , fontStyle: 'italic'}}>
                Explore&nbsp;
                <Box component='span' sx={{color: '#ffe500', fontWeight: '500', marginRight: '2px'}}>plus
                </Box>
                  <img src={subimage} className='subimage' alt="n" />

              </Typography>
            
        </Box>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Header