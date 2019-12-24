import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Fullarticle from './Fullarticle';
import ReadMoreReact from 'read-more-react';
import '../../csss/readMore.css'

export default class Leftcoulmncontent extends Component {
    constructor(props){
        super(props)
        console.log(`I am from LeftCorner${props.urlHistory}`)
    }
    render() {
        return (
            <div className="leftcolumn">
                {/* <div className="card"> */}
                {/* <h2></h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div className="fakeimg" style={{height:"200px"}}>Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}
                {
                    this.props.contents.map(content => {
                        return (
                            <div className="card">
                                <h2>{content.title}</h2>
                                <h5>Title description{content.updated_at}</h5>
                                <div className="fakeimg" style={{height:"200px"}}>Image</div>
                                {/* <p>{content.body}</p> */}
                                <ReadMoreReact text={content.body}
                                    min={50}
                                    ideal={100}
                                    max={200500}
                                    readMoreText="Read More"/>
                            </div>
                        )
                    })
                }
                {/* </div> */} 
            </div>
           
        );
    }
}









                