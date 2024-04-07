// https://News key={}api.org/v2/everything?domains=wsj.com&apiKey=a0e483bcd7ca44ad98650ec08507ee0f

import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App=() => {

  // apiKey=process.env.REACT_APP_NEWS_API

  const[progress,setProgress]=useState(0)


    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
          <Routes>

          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={15} category="general" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={15} category="sports" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={15} category="business" />} />
            <Route exact path="/education" element={<News setProgress={setProgress} key="education" pageSize={15} category="education" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={15} category="health" />} />
          

            
          </Routes>
        </Router>

      </div>
    );
  }


export default App;
