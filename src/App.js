// import logo from './logo.svg';

// import Message from './components/Message';
// import CurrentTime from './components/CurrentTime';
// import EventCard from './components/EventCard';
// import Timer from './components/timer';
// import CommentsList from './components/CommentsList';
// import Counter from './components/Counter';
// import TodoList from './components/TodoList';
// import ThemeSwitcher from './components/ThemeSwitcher';
// import TemperatureConverter from './components/TemperatureConverter';
// import BorderComp from './components/BorderComp';
import './components/style/EventCard.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import Home from './components/Home';
import About from './components/About';
import React from 'react';
import Navigation from './components/Navigation';

const articles = [
  { id: 1, title: 'Статья 1', content: 'Содержимое статьи' },
  { id: 2, title: 'Статья 2', content: 'Содержимое статьи' },
  { id: 3, title: 'Статья 3', content: 'Содержимое статьи' },
];


const App = () => (

  <Router>
    <div className="eventCard">
      <Navigation />

      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />
        
      </Routes>
    </div>
  </Router>

);

export default App;
