import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
// import SignUp from './Components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        {/* <Route path="/signup" element={<SignUp/>}/> */}
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
 