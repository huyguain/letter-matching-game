import React from 'react'
import './WonLose.scss'

const WonLose = props => {
  return (
    <div className="WonLose margin-top">
      <div className="won ant-row">
        <div className="ant-col ant-col-2">Won: </div>
        <div className="ant-col ant-col-4">0</div>
      </div>
      <div className="lose ant-row">
        <div className="ant-col ant-col-2">Won: </div>
        <div className="ant-col ant-col-4">0</div>
      </div>
    </div>
  )
}

export default WonLose
