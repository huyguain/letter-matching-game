import React, { useReducer } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import { reducer, initialState } from './store/reducer';
import { CardsContext } from './store/context';

const App = _ => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CardsContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header></Header>
        <Board></Board>
      </div>
    </CardsContext.Provider>
  );
}

export default App;
