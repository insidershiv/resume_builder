import { AppBar, Box, Grid, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { Animated } from "react-animated-css";
import resume_img1 from '../assets/undraw_online_cv_qy9w.svg';
import resume_img2 from '../assets/undraw_updated_resume_u4fy.svg';
import background from '../assets/background.jpg';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({

    mainContainer: {
        marginTop: '6em',
        [theme.breakpoints.down('sm')]: {
            direction: 'reverse'
        }
    },

    item1: {
        order: 2,
        [theme.breakpoints.up('sm')]: {
            order: 1
        }
    },

    item2: {
        order: 1,
        [theme.breakpoints.up('sm')]: {
            order: 2
        }
    },


    resumeText: {
        marginLeft: '5em'
    },
    resumeRIght: {
        marginRight: '0em',
        width: '100%'

    },
    imgContainer: {
        // marginRight: '10em',
        //    width:'100%',
        //    height:'100%'
        // width:'100px',
        // height:'100px',
        // backgroundPosition:'center',
        // backgroundSize:'cover',

    }
    , imgC: {
        width: '100%'
    }


}))



function Home() {




    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));


    return (


        <Grid container className={classes.mainContainer}>

            <Box clone order={{ xs: 2, sm: 1 }}>



                <Grid container item direction="column" align="center" justify="center" xs={12} sm={12} lg={5}  order={{ xs: 2, sm: 1 }}>


                    <Grid item>
                        <Typography variant="h3">
                            Hi, Get your resume done in minutes only.
        </Typography>
                    </Grid>



                </Grid>
            </Box>


            <Box clone order={{ xs: 1, sm: 2 }}>

            <Grid container item direction="row"  sm={12} lg={7} >

                <Grid container item justify={matches ? "center" :"flex-end"}>
                    <img src={resume_img1} alt="" height="80%" width="80%" />

                </Grid>
            </Grid>
            </Box>
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
