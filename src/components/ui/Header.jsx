import React, { useEffect, useState } from 'react';
import { AppBar, IconButton,  Menu, MenuItem, Tab, Tabs, Toolbar, Typography, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'


function Header(props) {

    const useStyles = makeStyles((theme)=>({

        toolbarMargin:{
            ...theme.mixins.toolbar
        },
        tabContainer:{
            marginLeft:'auto'
        },

        appbarBackground:{
            backgroundColor:'transparent'
        },
        tab:{
            color:'purple',
            fontFamily:'Lato',
            fontWeight:700,
            textTransform:'none'


        }
        
      

    }));



    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    var isFresh = true;
    const handleChange = (event, value)=>{
        isFresh = false;
        setValue(value);
    }

    useEffect(()=>{
        
       if(window.location.pathname ==='/' && value !== 0){
           setValue(0)
       }else if(window.location.pathname ==='/templates' && value !== 1){
           setValue(1)
       } else if(window.location.pathname ==='/about' && value !== 2){
           setValue(2)
       }else if(window.location.pathname ==='/suggestion' && value !==3){
           setValue(3)
       }
    }, [value])
    return (
       <>
        <AppBar className={classes.appbarBackground} position="fixed" elevation={0}>
            <Toolbar disableGutters>
               
         <Tabs className={classes.tabContainer} value ={value} onChange={handleChange} >
             <Tab label="Home" component={Link} to="/" className={classes.tab} disableRipple />
             <Tab label="Templates" component={Link} to="/templates" className={classes.tab} disableRipple />
             <Tab label="About" component={Link} to="/about" className={classes.tab} disableRipple />
             <Tab label="Suggestion" component={Link} to="/suggestion" className={classes.tab} disableRipple />
         </Tabs>

            </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin}></div>
        </>

      
    );
}

export default Header
