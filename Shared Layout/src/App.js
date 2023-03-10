import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import PageError from './Components/PageError';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* This is nested route */}
        <Route path='/' element={<Home />} >
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
