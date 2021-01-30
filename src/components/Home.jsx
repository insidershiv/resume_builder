import { AppBar, Box, Grid, Toolbar, Typography, useMediaQuery, useTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core';
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
    },


    textStyle:{
       
        [theme.breakpoints.up('lg')]:{

            marginTop:'8em'
        },
        [theme.breakpoints.down('md')]:{
            marginBottom:'3em'
        }

       
    },
//   textColor:{
//       ...theme.typography.h2,
//      [theme.breakpoints.down('sm')]:{
//         fontSize:'1rem'
//      }
//   }

// overrides: {
//     typography: {
//       root: {
//         "& h1": {
//           color: "blue"
//         },
//         "& h2": {
//           color: "red"
//         }
//       }
//     }
//   }


}))



function Home() {




    const classes = useStyles();
     let theme = useTheme();
    // theme = responsiveFontSizes(theme);
    const matches = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesSM = useMediaQuery(theme.breakpoints.down('md'));


    return (

        <MuiThemeProvider theme={theme}>
        <Grid container className={classes.mainContainer}>

            <Box clone order={{ xs: 2, sm: 1 }}>



                <Grid container item direction="column" align="center"  xs={12} sm={12} lg={5}  order={{ xs: 2, sm: 1 }} className={classes.textStyle}>


                    <Grid item>

                        <Typography variant="h2" >   


<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div style={{marginBottom:'.3em'}} className={classes.textColor}>
       Stuck Where to <b>START ?</b>
    </div>
</Animated>
                        </Typography>


                        <Typography variant="h3">



<Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true} animationInDuration="1200">
    <div style={{marginBottom:'.3em'}}>
    We are here,  Get your resume done in minutes only.
    </div>
</Animated>
                          
        </Typography>
                    </Grid>



                </Grid>
            </Box>


            <Box clone order={{ xs: 1, sm: 2 }}>

            <Grid container item direction="row"  sm={12} lg={7} >

                <Grid container item justify={matchesSM ? "center" :"flex-end"}>
                    <img src={resume_img1} alt="" height="80%" width="80%" />

                </Grid>
            </Grid>
            </Box>
        </Grid>


</MuiThemeProvider>
    )
}

export default Home
