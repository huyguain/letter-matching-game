import React, { useContext } from 'react'
import './Card.css'
import ReactCardFlip from 'react-card-flip';
import { CardsContext } from '../../store/context';

const Card = props => {
  const { onClick, type, show, completed } = props;
  const { state, dispatch } = useContext(CardsContext);
  const { level } = state;
  return (
    <div className={"Card ant-col ant-col-" + (+level === 3 ? "4" : "6")} onClick={onClick} 
      style={{visibility: completed ? 'hidden' : 'visible' }}>
      <ReactCardFlip isFlipped={show} flipDirection="horizontal">
        <div className="card-child">
        </div>
        <div className="card-child show">
          <span>{type}</span>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default Card
