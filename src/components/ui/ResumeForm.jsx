import { makeStyles } from '@material-ui/styles'
import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

mainContainer:{
    marginTop:'5em',
    width:"100%"
}

}))


function ResumeForm() {

    const classes = useStyles();



    return (


        <Grid container justify="center" className={classes.mainContainer}>

            <Grid containeritem width="100%">
                <form>
                    <TextField required id="name" label="Name" fullWidth/>

                </form>
            </Grid>

        </Grid>


    )
}





export default ResumeForm




