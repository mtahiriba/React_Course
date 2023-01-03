import React, { Component } from 'react'
import Menu from './menu';
import { DISHES } from '../shared/dishes';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContactComponent from './contactComponents';
import DishDetails from './dishDetails';
import AboutComponent from './AboutComponent';
import { PROMOTIONS } from '../shared/Promotions'
import { LEADERS } from '../shared/Leaders'
import { COMMENTS } from '../shared/Comments'
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class mainComponents extends Component {
  
    constructor(props) {
        super(props)
      
        this.state = {
           dishes: DISHES,
           comments: COMMENTS,
           leaders: LEADERS,
           promotions: PROMOTIONS
        }
    }


    render() {

      const HomeComponent = () => {
        return (
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                comment={this.state.comments.filter((comment) => comment.featured)[0]}
          />
        );
      }


      const DishWithId = ({match}) => {
        return(
            <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };


    return (
      <div>
        <HeaderComponent/>
        <Switch>
          <Route path='/home' component={HomeComponent}/>
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>}/>
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={ContactComponent}/>
          <Route exact path='/aboutus' component={() => <AboutComponent leaders={this.state.leaders}/>}/>
          <Redirect to='/home'/>
        </Switch>
        <FooterComponent/>
      </div>
    )
  }
}
