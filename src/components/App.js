import { ThemeProvider } from '@material-ui/styles'
import Home from './Home';
import Header from './ui/Header';
import theme from './ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Templates from './ui/Templates';
import ResumeForm from './ui/ResumeForm';

function App() {
  return (

    <ThemeProvider theme={theme}>

      <BrowserRouter>

      
      <Header />
         
          <Route exact path='/' component={()=> <Home />}   />          
          <Route exact path='/templates' component={()=> <Templates />}   />
          <Route exact path='/about' component={()=> <div>Here Goes about section</div>}   />
          <Route exact path='/suggestion' component={()=> <div>Here Goes suggestions</div>} />
          <Route exact path='/resumeform' component={()=><ResumeForm />} />
      </BrowserRouter>
      
        

    </ThemeProvider>
    
 
  );
}

export default App;
