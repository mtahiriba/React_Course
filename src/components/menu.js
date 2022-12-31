import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetails from './dishDetails';
export default class menu extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         selectedDishe: null,
      }
    }

    onDishSelect(dish){
        this.setState({selectedDishe: dish})
    }

    render() {
    
        const menu = this.props.dishes.map((dish) => {
            return (
                <div  className="col-md-5 col-sm-12 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
    
    return (
      <div className='container'>
        <div className='row'>
            {menu}
        </div>
        <DishDetails dish={this.state.selectedDishe}/>        
      </div>
      
    )
  }
}
