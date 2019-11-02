import React, { Component } from 'react';
import Popularpost from './Popularpost';

export default class Rightcolumncontent extends Component {
    render() {
        return (
            <div className="rightcolumn">
                <div className="card">
                <h2>About Me</h2>
                <div className="fakeimg" style={{height:"100px"}}>Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
                <Popularpost />
            </div>
        );
    }
}







