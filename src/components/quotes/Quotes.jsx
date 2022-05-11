import React, { Component } from 'react'
import './Quotes.css';
import quotes from './dbQuotes'

function randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomNumber])

    return quotes[randomNumber];
    
  }


export default class Quotes extends Component {
  render() {

    const num = randomQuote()

    return (
      <div>Quotes {num}</div>
    )
  }
}
