import React,{useState} from 'react';
import './App.css';
//페이지 분기
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import MemList from './pages/MemList';
import MemWrite from './pages/MemWrite';
import MemView from './pages/MemView';

function App() {
  

  return (
    <Router>
      <>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/MemList" element={<MemList/>}  />
        <Route path="/MemWrite" element={<MemWrite/>}  />
        <Route path="/MemView" element={<MemView/>}  />


      </Routes>
      </>
    </Router>
  );
}

export default App;
