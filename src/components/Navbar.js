import React, { useContext, useState } from 'react';
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Tab,
  Typography,
  Button,
  Menu,
  useMediaQuery,
  useTheme,
  Box
  } from '@material-ui/core';

import DrawerComponent from './DrawerComponent';
import { BsFillBrightnessHighFill, BsFillFilePlusFill } from 'react-icons/bs';
import { RiAccountCircleFill, RiLogoutBoxFill, RiMiniProgramFill, RiOpenArmFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {  ThemeProvider } from '@mui/material/styles';
import { signOut } from 'firebase/auth';
import { auth } from '../helpers/firebase';
import { AuthContext } from '../contexts/AuthContext'





const logOut = async () =>{
  await signOut(auth)
  console.log(auth);
}


const useStyles = makeStyles(theme => ({
  logo: {
    fontSize: '1.9rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
    },
  },
  acount: {
    marginLeft: 'auto',
    color:"black",
    '&:hover': {
      background: 'purple',
      color:"white",
    },
  },
  tabsContainer: {
    marginLeft: 'auto',
  },
  iconLogo: {
    color: 'white',
    fontSize: '4rem',
  },
  icons: {
    fontSize: '1.5rem',
    color: 'orange',
  },
  iconsFont: {
    fontSize: '1rem',
    color:"white"
  },

}));

const Navbar = () => {

  const { currentUser } =  useContext(auth)
  console.log(currentUser)
  //Hooks
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  //Boolean(anchorEl) This is use to convert a null value in to a boolean
  //anchorEl Is us to set the position of the menu

  const classes = useStyles();

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  //Functions
  const handleClickTab = (e, newValue) => {
    //The second value contains the current index
    setValue(newValue);
  };

  const handleOpenMenu = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
    
      <AppBar color="primary" >             

        <Toolbar  >
        
          <Box 
              style={{cursor:"pointer"}} 
              component={Link}
              to="/"
             
           
              > 
           
            <RiMiniProgramFill 
            className={classes.iconLogo}
    
            />
            <Typography
            style={{marginTop:"-0.8rem", marginLeft:"0.5rem"}}
              variant="h6"
              className={classes.iconsFont}>home</Typography>
            
          </Box>
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Tabs
                onChange={handleClickTab}
                className={classes.tabsContainer}
                indicatorColor='secondary'
                value={value}>
                
                <Tab
                  disableRipple
                  icon={<BsFillBrightnessHighFill className={classes.icons} />}
                  label='FireBlog Project'
                  component={Link}
                  to="/"       
                

                />
              </Tabs>
              <ThemeProvider theme={theme}>
              <Button
                onClick={handleOpenMenu}
                className={classes.acount}
                variant="contained"
                color="warning"  
                startIcon={<RiOpenArmFill className={classes.icons}/>}>   
                              
              open menu
              </Button>
              </ThemeProvider>
            </>
          )}
        </Toolbar>
      </AppBar>
     
      {/* Menu */}
      <Menu
        id='Menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        style={{ marginTop: '50px', display:"flex", flexDirection:"column"}}
        onClose={handleCloseMenu}>
        <Button startIcon={<RiAccountCircleFill className={classes.icons}/>} component={Link} to="/profile" onClick={handleCloseMenu}>My Account</Button>
        <Button startIcon={<BsFillFilePlusFill className={classes.icons}/>} component={Link} to="/new" onClick={handleCloseMenu}>New</Button>
        <Button startIcon={<RiLogoutBoxFill className={classes.icons}/>} component={Link} to="/login" onClick={()=>{handleCloseMenu(); logOut()}}>LogOut</Button>

      </Menu>
  
    </>
  );
};

export default Navbar;