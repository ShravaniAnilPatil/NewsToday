import React from 'react';
import './App.css';
import Navbar from './components/Navbar1';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<News apiKey={apiKey} key="general" pageSize={9} country="in" category="general" />} />
        <Route exact path='/business' element={<News apiKey={apiKey} key="business" pageSize={9} country="in" category="business" />} />
        <Route exact path='/entertainment' element={<News apiKey={apiKey} key="entertainment" pageSize={9} country="in" category="entertainment" />} />
        <Route exact path='/general' element={<News apiKey={apiKey} key="general" pageSize={9} country="in" category="general" />} />
        <Route exact path='/health' element={<News apiKey={apiKey} key="health" pageSize={9} country="in" category="health" />} />
        <Route exact path='/science' element={<News apiKey={apiKey} key="science" pageSize={9} country="in" category="science" />} />
        <Route exact path='/sports' element={<News apiKey={apiKey} key="sports" pageSize={9} country="in" category="sports" />} />
        <Route exact path='/technology' element={<News apiKey={apiKey} key="technology" pageSize={9} country="in" category="technology" />} />
      </Routes>
      <footer className="footer">
        <p>© 2023 NewsToday. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
