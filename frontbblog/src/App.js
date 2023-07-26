import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register'
import Home from './pages/home/Home';
// import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
 