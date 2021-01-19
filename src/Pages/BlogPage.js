import React, { Component } from 'react';
import BlackLoader from '../Images/black-loader.gif';
import client from './Client';
import BlogPosts from './BlogPosts';

class BlogPage extends Component {
    constructor() {
        super()
        this.state = {blogpage: []}
    }

    componentDidMount() {
        client.getEntries({
            'content_type' : 'blogPage',            
            })
            .then((entries) => {
            this.setState({blogpage: entries.items[0]}) 
            console.log(entries);
        })          
    }

    render() {  
        return (              
            <div id="blogpage">
                <div className="container">
                {this.state.blogpage.length === 0 ? 
                        <div className="pt-5"><img src={BlackLoader} alt="Loader" /></div>
                    :
                    <div>
                        <h1>{this.state.blogpage.fields.blogPageTitle}</h1> 
                        <BlogPosts />
                    </div>
                }
                </div>
            </div>      
        )
    }
}

export default BlogPage;