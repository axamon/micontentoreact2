import React, { Component } from 'react'
import "./Title.css";
import Typewriter from "../typewriter/Typewriter"

export default class Title extends Component {

  render() {
    const { titolo = "Titolo" } = this.props;
    return (
      <div className='titolo'>
        <u><a href="#">{titolo}</a></u>
        <br></br>
        <small id="senso" className="mt-4"><Typewriter text="Unità di misura di senso"/></small>
      </div>
    )
  }
}
