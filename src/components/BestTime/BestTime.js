import React from 'react'
import './BestTime.scss'

const BestTime = props => {
  return (
    <div className="BestTime margin-top ant-row">
      <div className="ant-col ant-col-2">Best time:</div>
      <div className="ant-col ant-col-4">
        <table border="1px">
          <thead>
            <tr>
              <th>Easy</th>
              <th>Normal</th>
              <th>Hard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>--:--</td>
              <td>--:--</td>
              <td>--:--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BestTime