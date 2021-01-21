import React, { Component } from 'react';
import BlackLoader from '../../Images/black-loader.gif';
import client from '../../Client';
import marked from 'marked';
import './Blog.css';

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

    getParsedMarkDown(parsedText) {
        return {
            __html:marked(parsedText, {sanitize: true})
        }
    }

    redirectToTarget = () => {
        this.props.history.push('/BlogPage')
    }

    render() {  
        return (              
            <div id="blogpostpage">
                <div className="container">
                {this.state.blogpostpage.length === 0 ? 
                        <div className="pt-5"><img src={BlackLoader} alt="Loader" /></div>
                    :
                    <div>
                        <img src={this.state.blogpostpage.fields.picture.fields.file.url} alt="" />         
                        <h1>{this.state.blogpostpage.fields.title}</h1>
                        <div className="main-body" dangerouslySetInnerHTML = {this.getParsedMarkDown(this.state.blogpostpage.fields.body)}></div>
                        <button onClick={this.redirectToTarget}>Back</button> 
                    </div>
                }
                </div>
            </div>      
        )
    }
}

export default BlogPost;