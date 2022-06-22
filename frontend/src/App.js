import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './views/Dashboard';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            {/* <Route path='/' element={<Home/>} /> */}
            <Route path='/' element={<Dashboard/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
