import { ThemeProvider } from '@material-ui/styles'
import Home from './Home';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (

    <ThemeProvider theme={theme}>
      
          <Header />
          <Home />

    </ThemeProvider>
    
 
  );
}

export default App;
