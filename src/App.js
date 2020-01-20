import React, { useReducer } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Board from './components/Board/Board';

const App = _ => {
  return (
    <div className="App">
      <Header></Header>
      <Board></Board>
    </div>
  );
}

export default App;
