import React, { Component } from 'react';
import client from './Client';
import {Link} from 'react-router-dom';

class Blog extends Component {
    constructor() {
        super()
        this.state = {blogpage: []}
    }
    componentDidMount() {
        client.getEntries({
            content_type : 'blogPost'
          })
          .then((entries) => {
            this.setState({blogpage: entries.items}) 
          })
    }
    render() {
        return(
            <div id="blog">                
                <div className="container">
                    <h1 className="text-center">Blog</h1>
                    <p className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="bloglist container">
                    <div className="row">
                        {this.state.blogpage.map((item, index) => {
                            return(
                                <div key={index} className="blog-item col-sm-6 col-lg-4 mb-4"> 
                                <div className="card">
                                    <img className="card-img-top" src={item.fields.picture.fields.file.url} alt="" />         
                                    <div className="card-body">
                                        <h2 className="card-title"><Link to={`../blogPost/${item.fields.slug}`}>{item.fields.title}</Link></h2>
                                        <p className="card-text">{item.fields.description}</p>
                                    </div>
                                </div>
                            </div> 
                            )}                     
                        )}                     
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog