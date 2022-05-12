import React, { Component } from 'react'
import './Circolo.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faHomeAlt, faDesktop, faCross, faSchool, faBook, faChild } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons';


export default class Circolo extends Component {
  render() {
    return (
    <div class="circolo-wrapper"> 
        <a href="#Progetto"><div class="circolo deg-0"></div></a>
        <a href="#Progetto"><div class="circolo deg-45"></div></a>
        <a href="#Progetto"><div class="circolo deg-90"></div></a> 
        <a href="#Progetto"><div class="circolo deg-135"></div></a> 
        <a href="#Progetto"><div class="circolo deg-180"></div></a> 
        <a href="#Progetto"><div class="circolo deg-225"></div></a> 
        <a href="#Progetto"><div class="circolo deg-270"></div></a> 
        <a href="#Progetto"><div class="circolo deg-315"></div></a>
    </div>  
    )
  }
}
