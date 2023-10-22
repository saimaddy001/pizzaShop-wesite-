import './App.css';
import Navbar from "./Compo/Navbar";
import Home from './Pages/Home';
import Footer from './Compo/Footer';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Menu' exact element={<Menu />} />
            <Route path='/About' exact element={<About/>} />
            <Route path='/Contact' exact element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

