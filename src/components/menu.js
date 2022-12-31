import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class menu extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         selectedDish: null,
      }
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish})
    }

    render() {
    
        const menu = this.props.dishes.map((dish) => {
            return (
                <div  className="col-md-5 col-sm-12 m-1">
                    <Card>
                        <Link to={`/menu/${dish.id}`}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
            );
        });
    
    return (
      <div className='container'>
        <div className="row">
            <div className="col-12">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
            </div>
            
            <div className="col-12">
                <h3>Menu</h3>
                <hr />
            </div>                
        </div>
        <div className='row'>
            {menu}
        </div>
      </div>
      
    )
  }
}
