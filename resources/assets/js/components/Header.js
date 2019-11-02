import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './Category/Index';
import Dashboard from './Dashboard/Dashboard';
import Popup from './Popup';
import { SocialIcon } from 'react-social-icons';
import '../../../../public/css/style.css';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Form from 'react-bootstrap/Form';



export default class Header extends Component {

    constructor(){
        super();
        this.state={
            categories :[],
            isLogin : false,
            modalShow : false,
            registerModalShow : false,
            forgetModalShow : false,
            validated : false,
            email : ' ',
            password : ' ',
            errormessage: ' ',
            loginEmail : 'Email',
            loginPassword : 'Password',
            registerationUserName : 'Username',
            registrationConfirmPassword : 'Confirm Password',
            forgetEmail : 'Email Id',
        }
    }

    // const [validated, setValidated] = useState(false);

  handleSubmit(event) {
    const form = event.currentTarget;
    let err = '';
    console.log(form.email);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if(this.state.email === ' '){
        // alert("Please Enter Proper Email");
        err = <strong className="warning">Please Enter Proper Email</strong>;
        this.setState({errormessage : err,});
    }
    if(this.state.password === ' '){
        // alert("Please Enter Correct Password");
        err = <strong className="warning">Please Enter Correct Password</strong>;
        this.setState({errormessage : err,});
    }
    this.setState({
        validated : true,
        
    });
    console.log(this.state.validated);
    // setValidated(true);
  }

  myChangeHandler(event){
    let nam = event.target.name;
    let val = event.target.value;
    
    this.setState({
        [nam]: val
    });
    console.log(this.state.email);
  }

    componentDidMount(){
        axios.get('http://localhost:8000/category')
        .then(response=>{
            this.setState({categories:response.data});
        });
    }
     
    loginUser(){
        this.setState({
            isLogin: true
        });
        console.log(this.state.isLogin);
    }
    loginOut(){
        this.setState({
            isLogin: false
        });
        console.log(this.state.isLogin);
    }

    handleClose(){
        this.setState({
            modalShow : false,
            registerModalShow : false,
            forgetModalShow : false,
        });
        console.log(this.state.modalShow);
    }
    ShowRegistrationForm(){
        this.setState({
            modalShow : false,
            registerModalShow : true,
            forgetModalShow : false,
        });
    }
    ShowForgetPassword(){
        this.setState({
            modalShow : false,
            registerModalShow : false,
            forgetModalShow : true,
        });
    }
    handleShow(){
        this.setState({
            modalShow : true,
            registerModalShow : false,
            forgetModalShow : false,
        });
        console.log('Hi'+this.state.modalShow);
    }
    
    render() {
        if(this.state.isLogin){
            return (
                <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <SocialIcon url="https://facebook.com/jaketrent" network="facebook" style={{ height: 25, width: 25 }} bgColor="white" /> &nbsp;&nbsp;
                                <SocialIcon url="https://twitter.com/jaketrent" network="twitter" style={{ height: 25, width: 25 }} bgColor="white" /> &nbsp;&nbsp;
                                <SocialIcon url="https://linkedin.com/jaketrent" network="linkedin" style={{ height: 25, width: 25 }} bgColor="white" /> &nbsp;&nbsp;
                            </li>
                        </ul>
                        <span style={{color:"white"}} onClick={this.loginOut.bind(this)}>Logout</span>
                    </nav>
                    <div className="header">
                        <h2>
                            Simply Learn Anything
                        </h2>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/Dashboard" className="nav-link">Dashboard<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/Category" className="nav-link">Category<span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Dashboard />
                </div>
                <Route exact path="/" component={Home} />
                <Route exact path="/Category" component={Category} /> 
                </Router>
            );
        }
        else{
            return(
                <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <SocialIcon url="https://facebook.com/jaketrent" network="facebook" style={{ height: 25, width: 25 }} bgColor="white" /> &nbsp;&nbsp;
                                    <SocialIcon url="https://twitter.com/jaketrent" network="twitter" style={{ height: 25, width: 25 }} bgColor="white" /> &nbsp;&nbsp;
                                    <SocialIcon url="https://linkedin.com/jaketrent" network="linkedin" style={{ height: 25, width: 25 }} bgColor="white" /> &nbsp;&nbsp;
                                </li>
                            </ul>
                            <span style={{color:"white"}} onClick={this.handleShow.bind(this)}>Login</span>
                        </nav>
                        <div className="header">
                            <h2>
                                Simply Learn Anything
                            </h2>
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            {/* <Link to="/" className="navbar-brand">Navbar</Link> */}
                            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button> */}
    
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                {
                                    this.state.categories.map(category=>{
                                        return (
                                            <li className="nav-item active">
                                                <Link to={`${category.name.toLowerCase().split(" ").join("-")}`} className="nav-link">{category.name} <span className="sr-only">(current)</span></Link>
                                            </li>
                                        ) 
                                    })
                                }
                                <li className="nav-item active">
                                    <Link to="/about" className="nav-link">About Us<span className="sr-only">(current)</span></Link>
                                </li>
                                {/* <li className="nav-item active">
                                    <Link to="/Category" className="nav-link">Category<span className="sr-only">(current)</span></Link>
                                </li> */}
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                        {
                            this.state.categories.map(category=>{
                                return(
                                    <Route exact path={`${category.name.toLowerCase().split(" ").join("-")}`} component={`${category.name}`} />
                                )
                            })
                        }
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/Category" component={Category} /> 


                        {/* Login Modal start Here */}

                        <Modal show={this.state.modalShow} onHide={this.handleClose.bind(this)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Login Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>{this.state.loginEmail}</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter email" autoComplete="off" required onChange={this.myChangeHandler.bind(this)}  />
                                        
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>{this.state.loginPassword}</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Password" autoComplete="off" required onChange={this.myChangeHandler.bind(this)}  />
                                        
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Remember Me" />
                                    </Form.Group> 
                                    <Button type="submit" className="text-center" onClick={this.loginUser.bind(this)}>Login</Button>                                                                                    
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.ShowForgetPassword.bind(this)}>
                                Forget Password
                                </Button>
                                
                                <Button type="submit" variant="success" onClick={this.ShowRegistrationForm.bind(this)}>
                                Create New Account
                                </Button>
                            </Modal.Footer>
                        </Modal>


                        {/* Registeration Model Starts Here */}
                        <Modal show={this.state.registerModalShow} onHide={this.handleClose.bind(this)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Registration Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>{this.state.registerationUserName}</Form.Label>
                                        <Form.Control type="text" name={`${this.state.registerationUserName}`} placeholder="Enter email" autoComplete="off" required onChange={this.myChangeHandler.bind(this)}  />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>{this.state.loginEmail}</Form.Label>
                                        <Form.Control type="email" name={`${this.state.loginEmail}`} placeholder="Enter email" autoComplete="off" required onChange={this.myChangeHandler.bind(this)}  />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>{this.state.loginPassword}</Form.Label>
                                        <Form.Control type="password" name={`${this.state.loginPassword}`} placeholder="Password" autoComplete="off" required onChange={this.myChangeHandler.bind(this)}  />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>{this.state.registrationConfirmPassword}</Form.Label>
                                        <Form.Control type="password" name={`${this.state.registrationConfirmPassword}`} placeholder="Password" autoComplete="off" required onChange={this.myChangeHandler.bind(this)}  />
                                    </Form.Group>
                                    {/* <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Remember Me" />
                                    </Form.Group>  */}
                                    <Button type="submit" variant="success" className="text-center">Submit</Button>                                                                                    
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                                Close
                                </Button> */}
                                
                                <Button type="submit" onClick={this.handleShow.bind(this)}>
                                Login
                                </Button>
                            </Modal.Footer>
                        </Modal>



                        {/* Recover Password Modal start Here */}

                        <Modal show={this.state.forgetModalShow} onHide={this.handleClose.bind(this)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Forget Password</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>{this.state.loginEmail}</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter email" autoComplete="off" required onChange={this.myChangeHandler.bind(this)}  />
                                    </Form.Group>
                                    <Button type="submit" variant="secondary" className="text-center">Recover Password</Button>                                                                                    
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={this.handleShow.bind(this)}>
                                Login
                                </Button>
                                
                                {/* <Button type="submit" variant="success" onClick={this.ShowRegistrationForm.bind(this)}>
                                Create New Account
                                </Button> */}
                            </Modal.Footer>
                        </Modal>
                    </div>

                </Router>
                
            );
        }

        
    }
}


