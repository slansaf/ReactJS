import './components/style/EventCard.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import Home from './components/Home';
import About from './components/About';
import React, { useState, createContext } from 'react';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';

export const ThemeContext = createContext('light');

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div
          className={`app ${theme} .eventCard`}
        >
          <ThemeToggle />
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
    </>
  );
};

export default App;
