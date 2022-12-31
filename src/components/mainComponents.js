import React, { Component } from 'react'
import Menu from './menu';
import { DISHES } from '../shared/dishes';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

export default class mainComponents extends Component {
  
    constructor(props) {
        super(props)
      
        this.state = {
           dishes: DISHES
        }
    }


    render() {
    return (
      <div>
        <HeaderComponent/>
        <Menu dishes={this.state.dishes}/>
        <FooterComponent/>
      </div>
    )
  }
}
