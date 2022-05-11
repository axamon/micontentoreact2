import React, { Component } from 'react'
import './Typewriter.css';

export default class Typewriter extends Component {
  render() {
        const { text = "very long text!" } = this.props;
    return (
      <div>
      <p class="line-1 anim-typewriter">{text}</p>
      </div>
    )
  }
}
