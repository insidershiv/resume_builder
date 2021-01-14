import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'



const useStyles = makeStyles((theme)=>({

    mainContainer:{
        marginBottom:'5em'
    }
    


}))






function Templates() {

    const classes = useStyles();



    return (
        <Grid container direction="column" className={classes.mainContainer}>

            <Grid container item direction="row" justify="center" style={{marginBottom:'3em'}}>

            <Typography variant="h3">
                Choose From the following templates and proceed to your Awesome Resume.
            </Typography>

            </Grid>

            <Grid container item  justify="center" align="center">
            <Button variant="contained" component={Link} to="/resumeform" color="primary" > Proceed to Resume... </Button>    
            </Grid>
        </Grid>
    )
}

export default Templates
