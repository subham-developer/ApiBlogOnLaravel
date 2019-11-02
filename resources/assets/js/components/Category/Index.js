import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Listing from './Listing';
import Add from './Add';
import Edit from './Edit';

export default class Index extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <hr />
                    <Link to="/Category" className="btn btn-primary">Listing</Link>
                    <Link to="/Category/Add" className="btn btn-primary">Add</Link>
                    <hr />
                    <Route exact path="/Category" component={Listing} />
                    <Route exact path="/Category/Add" component={Add} />
                    <Route exact path="/Category/edit/:id" component={Edit} />
                </div>
            </Router>
        );
    }
}

