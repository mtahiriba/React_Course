import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/menu';
import { DISHES } from './shared/dishes';
import React, { Component } from 'react'

class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       dishes: DISHES
    }
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Muhammad Tahir Memon</NavbarBrand>  
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
