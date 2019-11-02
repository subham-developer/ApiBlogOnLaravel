import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { Component } from 'react';
import React, { useState, Component } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';


// function Example() {
export default class Example extends Component {
    constructor(){
        super();
        this.state = {
            modalShow : false,
        }
    }
    // const [show, setShow] = useState(false);
  
    handleClose(){
        this.setState({
            modalShow : false
        });
    }

    handleShow(){
        this.setState({
            modalShow : true
        });
    }
  
    render(){
        return(
            <>
        <Button variant="primary" onClick={this.handleShow.bind(this)}>
          Launch demo modal
        </Button>
  
        <Modal show={this.state.modalShow} onHide={this.handleClose.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose.bind(this)}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose.bind(this)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        );
    }
      
  }
  
//   render(<Example />);
// export default Example;