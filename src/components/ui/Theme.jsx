import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const arcGrey = '#868686';

let theme =  createMuiTheme({
   
    typography:{
        h3:{
            fontSize: '1.2rem',
            color: arcGrey,
            fontFamily: 'Poppins',
          
        },
        h2:{
            fontSize: '1.5rem',
           
        },
        
        textColor:{
            fontSize:'1.2rem',
            color:arcGrey,
            fontFamily: 'Poppins',
        },
        textFieldName:{
            fontSize:'1em',
            color:''
        }
        
    },
});
theme = responsiveFontSizes(theme);
export default theme;
