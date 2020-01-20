import React from 'react'
import './Options.scss'
import { Select } from 'antd';
import { Button } from 'antd';

function handleChange(value) {
  console.log(`selected ${value}`);
}

const Options = props => {
  const { Option } = Select;
  return (
    <div className="Options">
      <Select defaultValue="0" style={{ width: 110 }} onChange={handleChange}>
        <Option value="0">Select level</Option>
        <Option value="1">Easy</Option>
        <Option value="2">Normal</Option>
        <Option value="3">Hard</Option>
      </Select>
      <Button className="margin-left" type="primary">Start</Button>
    </div>
  )
}

export default Options