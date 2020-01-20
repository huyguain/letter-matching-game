import React from 'react'
import './Header.scss'
import Options from '../Options/Options';
import WonLose from '../WonLose/WonLose';
import BestTime from '../BestTime/BestTime';

const Header = props => {
  return (
    <header className="Header">
      <Options></Options>
      <WonLose></WonLose>
      <BestTime></BestTime>
    </header>
  )
}

export default Header