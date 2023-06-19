import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import Movies from './pages/Movies';
import {Search} from './pages/Search';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/movies' element={<Movies/>}/>
                    <Route path='/search' element={<Search/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
