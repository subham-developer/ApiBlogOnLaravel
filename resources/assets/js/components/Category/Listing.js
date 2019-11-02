import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Listing extends Component {
    constructor()
    {
        super();
        this.state={
            categories:[]
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:8000/category')
        .then(response=>{
            this.setState({categories:response.data});
        });
    }

    onDelete(category_id)
    {
        console.log(category_id);
        axios.delete('http://localhost:8000/category/delete/'+category_id)
        .then(response=>{

        });
    }
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map(category=>{
                                return (
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{category.name}</td>
                                        <td>{category.active==1?("Active"):("InActive")}</td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td>
                                        <td><a className="btn btn-danger" onClick={this.onDelete.bind(this,category.id)}>Delete</a> | <Link to={`/Category/edit/${category.id}`} className="btn btn-primary">Edit</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

