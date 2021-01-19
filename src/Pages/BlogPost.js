import React, { Component } from 'react';
import client from './Client';
import marked from 'marked';

class BlogPost extends Component {
    constructor() {
        super()
        this.state = {blogpostpage: []}
    }

    componentDidMount() {
        const slug = this.props.match.params.slug
        if (slug) {
            client.getEntries({
                'content_type' : 'blogPost', 
                'fields.slug' : slug              
              })
              .then((entries) => {
                this.setState({blogpostpage: entries.items[0]}) 
              })
        }       
    }

    getParsedMarkDown(body) {
        return {
            _html:marked(body, {sanitize: true})
        }
    }

    redirectToTarget = () => {
        this.props.history.push('/Blog')
    }

    render() {  
        return (              
            <div className="blogpostpage">
                <div className="container">
                    <div className="main-body" dangerouslySetInnerHTML = {this.getParsedMarkDown(this.state.blogpostpage.fields.body)}></div>
                    <button onClick={this.redirectToTarget}>Back</button> 
                </div>
            </div>      
        )
    }
}

export default BlogPost;