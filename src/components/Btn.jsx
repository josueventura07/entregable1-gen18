import React from 'react'

const Btn = ({randomColor, getRandomAll}) => {
  
    const backgroundObj = {
        backgroundColor: randomColor
    }

    return (
    <div className='btn_container'>
        <button 
        className='card_btn' 
        style={backgroundObj}
        onClick={getRandomAll}
        >&#62;</button>
    </div>
  )
}

export default Btn