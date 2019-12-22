import React, { Component } from 'react';
import Leftcolumncontent from './Leftcolumncontent';
import Rightcolumncontent from './Rightcolumncontent';

export default class Home extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="row">
                {/* <Leftcolumncontent /> */}
                {/* <Rightcolumncontent /> */}
            </div>
        );
    }
}

