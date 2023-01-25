import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './commentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

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
                        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
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

    renderComments(dish, comments, addComment){
        if(dish != null){
            return(
                <div className='col-md-5 col-sm-12 m-1'>
                    <>
                        <h2>Comments</h2>
                        <br/>    
                        {comments.map((comment) => {
                            return(
                                <div key={comment.id}>
                                    <p><h5>{comment.comment}</h5></p>
                                    <p><h5>-- {comment.author}, {comment.date}</h5></p>
                                    
                                </div>
                            )
                        })}
                    </>
                    <br/>
                    <CommentForm dishId={dish.id} addComment={addComment}/>
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
        if (this.props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                        <Breadcrumb>
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className='row'>
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish, this.props.comments, this.props.addComment)}
                    </div>      
                </div>
            
            )
  }
}
