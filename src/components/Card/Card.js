import React from 'react'
import './Card.scss'

const Card = props => {
  const { onClick, type, show } = props
  return (
    <div className="Card ant-col ant-col-6" onClick={onClick}>
      <div className={"card-child " + (show ? 'show' : '')}>
        {
          show && <span>{type}</span>
        }
      </div>
    </div>
  )
}

export default Card
