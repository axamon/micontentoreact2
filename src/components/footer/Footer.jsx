import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
        const { owner = "Cambiami" } = this.props;
        const d = new Date();
        let year = d.getFullYear();
    return (
    <footer>
         <div className="links-sotto">
          <span><a  href="#Podcast">PODCAST</a> |  </span>
          <span><a  href="#Contatti">PERSONAL GREEN TRAINER</a> </span>
        </div>
        <p><small>&copy; {year} {owner}</small></p>
    </footer>
    )
  }
}
