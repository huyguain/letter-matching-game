import React, { useReducer, useState, useEffect } from 'react'
import './Board.scss'
import Card from '../Card/Card';
import { reducer, initialState } from '../../reducer';

const Board = props => {
  const [{ cards }, dispatch] = useReducer(reducer, initialState);
  console.log('huynt cards', cards);
  const [checkers, setCheckers] = useState([])
  const [completed, setCompleted] = useState([])
  const onCardClick = card => {
    console.log('huynt cards');
    // dispatch({type: 'SET_NEW_CARDS', payload: cards});
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return
    const newCheckers = [...checkers, card]
    setCheckers(newCheckers)
    const cardsInCheckersMatched = validateCheckers(newCheckers)
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type])
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000)
    }
    function validateCheckers(checkers){
      return checkers.length === 2 &&
      checkers[0].type === checkers[1].type
    }
    function cardAlreadyInCheckers(checkers, card){
      return checkers.length === 1 && checkers[0].id === card.id
    }
    function checkersFull(checkers){
      return checkers.length === 2
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([])
      }, time)
    }
  }

  useEffect(() => {
    const newCards = cards.map(card => ({
      ...card,
      show:
        !!checkers.find(c => c.id === card.id) ||
        completed.includes(card.type),
    }))
    dispatch({type: 'SET_NEW_CARDS', payload: newCards})
  }, [checkers, completed])

  return (
    <section className="Board margin-top ant-row-flex">
      {cards.map(card => (
        <Card {...card} key={card.id} onClick={() => onCardClick(card)} />
      ))}
    </section>
  )
}

export default Board