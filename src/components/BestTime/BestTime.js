import React, { useContext } from 'react'
import './BestTime.css'
import { CardsContext } from '../../store/context';

const BestTime = props => {
  const { state, dispatch } = useContext(CardsContext);
  const { bestEasy, bestNormal, bestHard } = state;
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
              <td>{bestEasy ? bestEasy : '--:--'}</td>
              <td>{bestNormal ? bestNormal : '--:--'}</td>
              <td>{bestHard ? bestHard : '--:--'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BestTime