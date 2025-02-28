import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Mlist from './page/Mlist';
import Minsert from './page/Minsert';
import Mupdate from './page/Mupdate';
import Mview from './page/Mview';
import Home from './page/Home';

function App() {
  
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mlist" element={<Mlist />} />
            <Route path="/minsert" element={<Minsert />} />
            <Route path="/mupdate" element={<Mupdate />} />
            <Route path="/mview" element={<Mview />} />
          </Routes>
        </div>
      </Router>
   
    
  );
}

export default App;
