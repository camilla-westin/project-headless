import React, {Component} from 'react';
import client from './Client';
import BlackLoader from '../Images/black-loader.gif';
import marked from 'marked';
 
class About extends Component {
    constructor() {
        super()
        this.state = {aboutpage: []}
    }

    componentDidMount() {
        client.getEntries({
            'content_type' : 'about'
          })
          .then((entries) => {
            this.setState({aboutpage: entries.items[0]}) 
          })
    }

    getParsedMarkdown(heading) {
        return {
            __html:marked(heading, {sanitize: true})
        }
    }

    getParsedMarkdown(aboutMainBody) {
        return {
            __html:marked(aboutMainBody, {sanitize: true})
        }
    }
 
    render() {
        return(
            <div id="about">
                <div className="container">
                    {/* <h1 className="text-center">{this.state.fields.aboutpage.heading}</h1> */}
                    <p className="intro"></p>
                    {this.state.aboutpage.length === 0 ? 
                        <div className="pt-5"><img src={BlackLoader} alt="Loader" /></div>
                    :
                        <div className="main-body" dangerouslySetInnerHTML = {this.getParsedMarkdown(this.state.aboutpage.fields.aboutMainBody)}>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
export default About