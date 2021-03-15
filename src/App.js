import { useState } from 'react';

import HomePage from './routes/Home'
import GamePage from './routes/Game'

import './App.css';

const App = () => {
  const [page, setPage] = useState('home');
  const handleChangePage = (page) => {
    setPage(page);
  };

  switch (page) {
    case 'home': 
      return <HomePage onChangePage={handleChangePage}/>;
    case 'game': 
      return <GamePage onChangePage={handleChangePage}/>;
    default:
      return <HomePage />;
  }
};

export default App;