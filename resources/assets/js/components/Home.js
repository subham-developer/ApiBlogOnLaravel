import React, { Component } from 'react';
import Leftcolumncontent from './Leftcolumncontent';
import Rightcolumncontent from './Rightcolumncontent';

export default class Home extends Component {
    render() {
        return (
            <div className="row">
                <Leftcolumncontent />
                <Rightcolumncontent />
            </div>
        );
    }
}

