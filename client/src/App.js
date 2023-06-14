import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './pages/Home';
import Movies from './pages/Movies';
import {Series} from './pages/Series';


function App() {
  return (
      <>
      <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>} />
        <Route path='/Series' element ={<Series/>} />
    
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
