import React, { useContext } from 'react';
import './WonLose.css';
import { CardsContext } from '../../store/context';

const WonLose = props => {
  const { state, dispatch } = useContext(CardsContext);
  const { won, lose } = state;
  return (
    <div className="WonLose margin-top">
      <div className="won ant-row">
        <div className="ant-col ant-col-2">Won: </div>
        <div className="ant-col ant-col-4">{won}</div>
      </div>
      <div className="lose ant-row">
        <div className="ant-col ant-col-2">Lose: </div>
        <div className="ant-col ant-col-4">{lose}</div>
      </div>
    </div>
  )
}

export default WonLose
