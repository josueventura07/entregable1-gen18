import React from 'react'

const QuoteBox = ({randomQuote, randomColor}) => {

const colorObj = {
    color: randomColor
}



  return (
    <article style={colorObj} className='text'>
        <div>
          <p className='icon'>&#8220;</p>
        </div>
        <div className='quote'>
          <p className='card_quote'>{randomQuote.quote}</p>
          <h1 className='card_author'>{randomQuote.author}</h1>
        </div>
     
    </article>
  )
}

export default QuoteBox