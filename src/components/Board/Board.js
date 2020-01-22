import React, { useContext, useState, useEffect } from 'react'
import './Board.css'
import Card from '../Card/Card';
import { CardsContext } from '../../store/context';
import TimeRemain from '../TimeRemain/TimeRemain';
import { Modal } from 'antd';
const { confirm } = Modal;

const Board = props => {
  const { state, dispatch } = useContext(CardsContext);
  const { cards, remainning, takeTime, bestEasy, bestNormal, bestHard, level } = state;
  const [checkers, setCheckers] = useState([])
  const [completed, setCompleted] = useState([])
  const onCardClick = card => {
    // dispatch({type: 'SET_NEW_CARDS', payload: cards});
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return
    const newCheckers = [...checkers, card]
    setCheckers(newCheckers)
    const cardsInCheckersMatched = validateCheckers(newCheckers)
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type]);
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000)
    }
    function validateCheckers(checkers) {
      return checkers.length === 2 &&
        checkers[0].type === checkers[1].type
    }
    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id
    }
    function checkersFull(checkers) {
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
      show: !!checkers.find(c => c.id === card.id),
      completed: completed.includes(card.type),
    }))
    dispatch({ type: 'SET_NEW_CARDS', payload: newCards });
  }, [checkers, completed]);

  useEffect(() => {
    if (completed.length === cards.length / 2) {
      setCompleted([]);
      dispatch({ type: 'SET_REMAINNING', payload: false });
      dispatch({ type: 'RESET_CARDS', payload: +level === 3 ? 18 : 8 });
      dispatch({ type: 'SET_WON' });
      showConfirmWon();
      setBestTime()
    }
  }, [completed]);

  function showConfirmWon() {
    confirm({
      title: 'Congratulations!!!',
      content: 'Your memory is still useful.',
      cancelText: 'Too easy? Try different level',
      okText: 'Try again',
      onOk() {
        dispatch({ type: 'SET_REMAINNING', payload: true });
      },
      onCancel() {
        dispatch({ type: 'SET_LEVEL', payload: '0' });
      },
    });
  }

  function setBestTime() {
    if (+level === 1 && (!bestEasy || takeTime < bestEasy)) {
      dispatch({type: 'SET_BEST_EASY', payload: takeTime});
    }
    if (+level === 2 && (!bestNormal || takeTime < bestNormal)) {
      dispatch({type: 'SET_BEST_NORMAL', payload: takeTime});
    }
    if (+level === 3 && (!bestHard || takeTime < bestHard)) {
      dispatch({type: 'SET_BEST_HARD', payload: takeTime});
    }
    dispatch({type: 'RESET_TAKE_TIME'})
  }

  return (
    <section className="Board">
      {
        remainning &&
        <div>
          <TimeRemain></TimeRemain>
          <div className="ant-row-flex margin-top">
            {cards.map(card => (
              <Card {...card} key={card.id} onClick={() => onCardClick(card)} />
            ))}
          </div>
        </div>
      }
    </section>
  )
}

export default Board