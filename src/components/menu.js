import React, { Component } from 'react'
import { Media } from 'reactstrap'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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

    renderDish(dish){
        if(dish != null){
            return(
                <Card className='col-md-5 col-sm-12'>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            )
        }
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
      <div>
        <div className='row'>
            {menu}
        </div>
        <div className="row">
            {this.renderDish(this.state.selectedDishe)}
        </div>
      </div>
      
    )
  }
}
