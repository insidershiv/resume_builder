import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Animated } from "react-animated-css";
import resume_img1 from '../assets/undraw_online_cv_qy9w.svg';
import resume_img2 from '../assets/undraw_updated_resume_u4fy.svg';

import { makeStyles } from '@material-ui/styles';





function Home() {

    const useStyles = makeStyles(() => ({

        mainContainer: {
            marginTop: '6em'
        },
       
      
          resumeText: {
              marginLeft:'5em'
          },
          resumeRIght:{
              marginRight:'0em',
              width:'100%'
              
          },
          imgContainer:{
              marginRight:'10em'
          }
          , imgC:{
              width:'100%'
          }


    }))


    const classes = useStyles();


    return (


      <Grid container className={classes.mainContainer}>

          <Grid container item  direction="column" align="center" justify="center" lg={5}>
             

        <Grid item>
        <Typography variant="h3">
Hi, Get your resume done in minutes only.
        </Typography>
        </Grid>

            
   
          </Grid>

          <Grid container item lg={7} justify="flex-end">
         <Grid container className={classes.imgContainer}>
             <Grid item style={{height:'50em'}} className={classes.imgC}>

<img src={resume_img1} alt=""/>
             </Grid>
             </Grid>    
          </Grid>
      </Grid>

        // <Grid container direction="row" justify="space-between" align="center" style={{backgroundColor:'pink', paddingLeft:'10em', paddingRight:'10em'}}>

        //     <Grid item style={{backgroundColor:'yellow', marginTop:'10px'}} alignItems="center">

            
        //         <Typography align="center ">
        // Hi, this is gaurav's idea
        //         </Typography>

        //     </Grid>

        //     <Grid item style={{backgroundColor:'green'}} >
        //         <img src={resume_img1} alt=""/>
        //     </Grid>

        // </Grid>


    )
}

export default Home
