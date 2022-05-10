import React, { Component } from 'react'
import "./Title.css";

export default class Title extends Component {

  render() {
    const { titolo = "Titolo" } = this.props;
    return (
      <div className='titolo'>
        <a href="#">{titolo}</a>
        <br></br>
        <small>
          <span><a  href="#Contatti">Contatti</a>  | </span>
          <span><a  href="#Sportello">Sportello</a> |  </span>
          <span><a  href="#GPT">GPT</a></span>
        </small>
      </div>
    )
  }
}
