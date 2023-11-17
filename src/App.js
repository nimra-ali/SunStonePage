// App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import ContentBox from './Component/ContentBox';
import Api from './Component/Api'
import Appliication from './Component/Application'
import Blogs from './Component/Blogs';
import Hackathon from './Component/Hackathon'

function App() {
  return (
    <div className='App'>

    
    <Router>
      <div  >
        <Navbar />
        <div style={{ display: 'flex' }}>
          <div>
            <Sidebar />
          </div>
          <div >
            <Routes>
              <Route path="/" element={<ContentBox />} />
              <Route path="/api" element={<Api/>} />
              <Route path="/applications" element={<Appliication/>} />
              <Route path="/blogs" element={<Blogs/>} />
              <Route path="/hackathon" element={<Hackathon />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
