import React from 'react';
import { AppBar, IconButton,  Menu, MenuItem, Tab, Tabs, Toolbar, Typography, useTheme } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles'


function Header() {

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
    return (
       <>
        <AppBar className={classes.appbarBackground} position="fixed" elevation={0}>
            <Toolbar disableGutters>
               
         <Tabs className={classes.tabContainer}>
             <Tab label="Home" className={classes.tab}/>
             <Tab label="Templates" className={classes.tab} />
             <Tab label="About" className={classes.tab} />
             <Tab label="Suggestion" className={classes.tab} />
         </Tabs>

            </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin}></div>
        </>

      
    );
}

export default Header
