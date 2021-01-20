import React, { Component } from 'react';
import client from '../Client';
import {Link} from 'react-router-dom';
import './Blog.css';

class BlogPosts extends Component {
    constructor() {
        super()
        this.state = {
            blogposts: []
        }
    }
    componentDidMount() {
        client.getEntries({
            content_type : 'blogPost'           
          })
          .then((entries) => {
            this.setState({blogposts: entries.items})     
        })
    }
    render() {
        return(
            <div id="blog">                
                <div className="bloglist container">
                    <div className="row">
                        {this.state.blogposts.map((item, index) => {
                            return(
                                <div key={index} className="blog-item col-sm-6 col-lg-4 mb-4"> 
                                <div className="card">
                                    <img className="card-img-top" src={item.fields.picture.fields.file.url} alt="" />         
                                    <div className="card-body">
                                        <h2 className="card-title"><Link to={`../BlogPosts/${item.fields.slug}`}>{item.fields.title}</Link></h2>
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

export default BlogPosts