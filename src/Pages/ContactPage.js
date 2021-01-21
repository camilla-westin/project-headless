import React, {Component} from 'react';
import client from '../Client';
import BlackLoader from '../Images/black-loader.gif';
import marked from 'marked';
import Contacts from '../Components/Contact/Contacts';
 
class ContactPage extends Component {
    constructor() {
        super()
        this.state = {contactpage: []}
    }

    componentDidMount() {
        client.getEntries({
            'content_type' : 'contactPage'
          })
          .then((entries) => {
            this.setState({contactpage: entries.items[0]}) 
          })
    }

    getParsedMarkdown(parsedText) {
        return {
            __html:marked(parsedText, {sanitize: true})
        }
    }
 
    render() {
        return(
            <div id="contactpage">
                <div className="container">
                    {this.state.contactpage.length === 0 ? 
                        <div className="pt-5"><img src={BlackLoader} alt="Loader" /></div>
                    :
                        <div>
                            <h1 className="text-center">{this.state.contactpage.fields.contactPageTitle}</h1>
                            <p className="intro">{this.state.contactpage.fields.contactPageIntro}</p>
                            <Contacts />
                        </div>
                    }
                </div>
            </div>
        );
    }
}
export default ContactPage