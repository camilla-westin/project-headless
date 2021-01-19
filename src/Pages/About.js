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

    getParsedMarkdown(parsedText) {
        return {
            __html:marked(parsedText, {sanitize: true})
        }
    }
 
    render() {
        return(
            <div id="aboutpage">
                <div className="container">
                    {this.state.aboutpage.length === 0 ? 
                        <div className="pt-5"><img src={BlackLoader} alt="Loader" /></div>
                    :
                        <div>
                            <h1>{this.state.aboutpage.fields.heading}</h1>
                            <p className="intro" dangerouslySetInnerHTML = {this.getParsedMarkdown(this.state.aboutpage.fields.aboutPreamble)}></p>
                            <div className="main-body" dangerouslySetInnerHTML = {this.getParsedMarkdown(this.state.aboutpage.fields.aboutMainBody)}></div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
export default About