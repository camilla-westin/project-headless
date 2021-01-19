import React, {Component} from 'react';
import client from './Client';
import BlackLoader from '../Images/black-loader.gif';
import marked from 'marked';
import Services from './Services';
 
class ServicesPage extends Component {
    constructor() {
        super()
        this.state = {servicespage: []}
    }

    componentDidMount() {
        client.getEntries({
            'content_type' : 'servicesPage'
          })
          .then((entries) => {
            this.setState({servicespage: entries.items[0]}) 
          })
    }

    getParsedMarkdown(parsedText) {
        return {
            __html:marked(parsedText, {sanitize: true})
        }
    }
 
    render() {
        return(
            <div id="servicespage">
                <div className="container">
                    {this.state.servicespage.length === 0 ? 
                        <div className="pt-5"><img src={BlackLoader} alt="Loader" /></div>
                    :
                        <div>
                            <h1 className="text-center">{this.state.servicespage.fields.servicesPageTitle}</h1>
                            <p className="intro" dangerouslySetInnerHTML = {this.getParsedMarkdown(this.state.servicespage.fields.servicesPagePreamble)}></p>
                            <Services />
                        </div>
                    }
                </div>
            </div>
        );
    }
}
export default ServicesPage