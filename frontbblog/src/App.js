import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Login from './components/login/Login';
import Register from './components/register/Register'
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
 