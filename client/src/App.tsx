import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Connect from './pages/Connect';
import Skills from './pages/Skills';
import Work from './pages/Work';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='skills' element={<Skills />} />
        <Route path='work' element={<Work />} />
        <Route path='connect' element={<Connect />} />
        <Route path='*' element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
