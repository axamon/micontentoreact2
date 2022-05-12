import React, { Component } from 'react'
import './Quotes.css';
import quotes from './dbQuotes'

function randomQuote()  {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomNumber])

    return quotes[randomNumber];
    
  }


export default class Quotes extends Component {
  render() {

    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });

    return (
      <div>Quotes {num}</div>
    )
  }
}
