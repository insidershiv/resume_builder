import { Grid, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'


const useStyles = makeStyles(()=>({
input:{
    borderRadius:11
}
}))




function InputField(props) {

    const classes = useStyles();
    return (
       <>
    <Grid container direction="column" spacing={1}>

<Grid item>
    <TextField label={props.label} placeholder={props.placeholder} variant={props.variant} InputProps={{className: classes.input, shrink:true}} size = {props.size} required={props.req}/>

</Grid>
    </Grid>
       </>
    )
}

export default InputField
