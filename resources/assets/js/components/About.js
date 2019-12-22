import React, { Component } from 'react';
import Aboutme from './Aboutme';
import Leftcolumncontent from './Leftcolumncontent';
import Rightcolumncontent from './Rightcolumncontent';

export default class About extends Component {
    render() {
        return (
            <div className="row">
                {/* <Leftcolumncontent /> */}
                <Rightcolumncontent />
            </div>
        );
    }
}

