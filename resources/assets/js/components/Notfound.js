import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import PageNotFound from '../components/Images/PageNotFound.jpg';
export default class Notfound extends React.Component{
    render(){
        return <div>
            {/* <img src={PageNotFound} wodth="50%" height="80%" /> */}
            <p style={{textAlign:"center"}}>
              <Link to="/"><Button className="btn btn-danger">Go to Home</Button></Link>
            </p>
          </div>;
    }
}