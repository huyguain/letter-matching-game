import React, { useContext } from 'react'
import './Options.css'
import { Select } from 'antd';
import { Button } from 'antd';
import { CardsContext } from '../../store/context';

const Options = props => {
  const { Option } = Select;
  const { state, dispatch } = useContext(CardsContext);
  const { level, remainning } = state;
  const handleChange = value => {
    dispatch({ type: 'SET_LEVEL', payload: value });
    dispatch({ type: 'RESET_CARDS', payload: +value === 3 ? 18 : 8 });
  }
  const onStartClick = _ => {
    dispatch({ type: 'SET_REMAINNING', payload: true })
  }
  return (
    <div className="Options">
      <Select defaultValue={level} value={level} style={{ width: 110 }} onChange={handleChange} disabled={remainning}>
        <Option value="0">Select level</Option>
        <Option value="1">Easy</Option>
        <Option value="2">Normal</Option>
        <Option value="3">Hard</Option>
      </Select>
      <Button className="margin-left" type="primary" disabled={!+level || remainning} onClick={onStartClick}>Start</Button>
    </div>
  )
}

export default Options