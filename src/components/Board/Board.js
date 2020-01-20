import React, { useReducer } from 'react'
import './Board.scss'
import Card from '../Card/Card';
import { reducer, initialState } from '../../reducer';

const Board = props => {
  const [{ cards }, dispatch] = useReducer(reducer, initialState);
  console.log('huynt cards', cards);
  return (
    <section className="Board margin-top ant-row-flex" onClick={() => dispatch({type: 'decrement'})}>
      {cards.map(card => (
        <Card {...card} key={card.id} />
      ))}
    </section>
  )
}

export default Board