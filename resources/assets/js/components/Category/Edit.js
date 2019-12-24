import React, { Component } from 'react';
import axios from 'axios';
import CKEditor from 'ckeditor4-react';

export default class Add extends Component {
    constructor(props){
        super(props);
        console.log('This is Shubham'+this.props.match.params.id);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            category_name : ''
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:8000/api/Category/edit/'+this.props.match.params.id)
        .then(response=>{
            console.log(response.data.name);
            this.setState({category_name:response.data.name});
        });
    }
    onChangeCategoryName(e){
        this.setState({
            category_name:e.target.value
        });
    }
    onEditBodyText(e){
        console.log(e.editor.getData());
    }
    onSubmit(e)
    {
        e.preventDefault();
        const category = {
            category_name : this.state.category_name
        }
        axios.put('http://localhost:8000/api/category/update/'+this.props.match.params.id,category)
        .then(
            res=>console.log(res.data)
            );
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Category Name</label>
                        <input type="text" 
                        className="form-control" 
                        id="category_name" 
                        name="category_name" 
                        value={this.state.category_name}
                        onChange={this.onChangeCategoryName}
                        aria-describedby="emailHelp" 
                        placeholder="Enter CategoryName" />
                    </div>
                    <CKEditor
                        data=""
                        type="classic"
                        onChange={this.onEditBodyText.bind(this)}
                        name="body"
                    />
                    
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

