import React, { Component } from 'react'
import Menu from './menu';
import { DISHES } from '../shared/dishes';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class mainComponents extends Component {
  
    constructor(props) {
        super(props)
      
        this.state = {
           dishes: DISHES
        }
    }


    render() {

      const HomeComponent = () => {
        return (
          <Home/>
        );
      }

    return (
      <div>
        <HeaderComponent/>
        <Switch>
          <Route path='/home' component={HomeComponent}/>
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>}/>
          <Redirect to='/home'/>
        </Switch>
        <FooterComponent/>
      </div>
    )
  }
}
