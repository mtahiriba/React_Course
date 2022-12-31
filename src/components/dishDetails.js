import React, { Component } from 'react'
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';


export default class dishDetails extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div className='col-md-5 col-sm-12 m-1'>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><h3>{dish.name}</h3></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderComments(dish){
        if(dish != null){
            return(
                <div className='col-md-5 col-sm-12 m-1'>
                    <Card className='p-3'>
                        <h2>Comments</h2>
                        {dish.comments.map((comment) => {
                            return(
                                <div key={comment.id}>
                                    <p><h5>{comment.comment}</h5></p>
                                    <p><h5>-- {comment.author}, {comment.date}</h5></p>
                                    <br/>
                                </div>
                            )
                        })}
                    </Card>
                </div>
                
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render() {
    return (
      <div className='row'>
        {this.renderDish(this.props.dish)}
        {this.renderComments(this.props.dish)}
      </div>
    )
  }
}
