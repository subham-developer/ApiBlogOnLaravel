import React, { Component } from 'react';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Category from './Category/Index';
// import Dashboard from './Dashboard/Dashboard';
// import Popup from './Popup';
// import { SocialIcon } from 'react-social-icons';
import '../../../../public/css/style.css';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Form from 'react-bootstrap/Form';
import logo from './Images/mumbai2.png';
import Leftcolumncontent from './Leftcolumncontent';
import Rightcolumncontent from './Rightcolumncontent';


 export default class DynamicContent extends Component{
     constructor(props){
         super(props)
        //  console.log(props)
         console.log(props.isMyName)
        //  console.log(props.cat_id)
        //  console.log(props.title)
        //  console.log(props.body)
        //  console.log(props.slug)
     }
        render(){
            return(
                
                <div className="row">
                    <Leftcolumncontent contents={this.props.isMyName}/>
                    <Rightcolumncontent />
                </div>

            );
        }
 }