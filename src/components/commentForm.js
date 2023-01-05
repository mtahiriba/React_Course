import React, { Component } from 'react'
import { Button, ModalHeader, ModalBody, Label, Col, FormGroup } from 'reactstrap';
import {Modal} from 'react-bootstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export default class commentForm extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
        isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
}
  
    render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Submit Comment</Button>
        <Modal show={this.state.isModalOpen}>
        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <FormGroup>
                                        <div md={{size: 3, offset: 1}}>
                                            <Control.select model=".rating" name="rating"
                                                className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="author">Your Name</Label>
                                        
                                            <Control.text model=".author" id="author" name="author"
                                                placeholder="Name"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                                />
                                            <Errors
                                                className="text-danger"
                                                model=".lastname"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 3 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
        
                                    </FormGroup>
                                    
                                    <FormGroup >
                                        <Label htmlFor="comment">Comment</Label>
                                        
                                            <Control.textarea model=".comment" id="comment" name="comment"
                                                rows="6"
                                                className="form-control" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Button type="submit" value="submit" color="primary" className="btn-lg btn-block mt-3">
                                            Submit
                                        </Button>
                                    </FormGroup>
                                </LocalForm>
       
            </ModalBody>
        </Modal>
      </div>
    )
  }
}
