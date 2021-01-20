import React, { Component } from 'react';
import client from '../../Pages/Client';
import './Contact.css';

class Contacts extends Component {
    constructor() {
        super()
        this.state = {
            contacts: []
        }
    }
    componentDidMount() {
        client.getEntries({
            content_type : 'person'           
          })
          .then((entries) => {
            this.setState({contacts: entries.items})     
        })
    }
    render() {
        return(
            <div id="contacts">                
                <div className="contactlist container">
                    <div className="row">
                        {this.state.contacts.map((item, index) => {
                            return(
                                <div key={index} className="contact-item col-lg-6 row"> 
                                    <div class="contact-item-inner row">
                                        <div className="col-lg-6 p-0">
                                            <img src={item.fields.image.fields.file.url} alt="{item.fields.description}" />
                                        </div>
                                        <div className="col-lg-6 contact-info">
                                            <h2>{item.fields.name}</h2>
                                            <div className="title">{item.fields.title}</div>
                                            <a className="email" href="mailto:{item.fields.email}">{item.fields.email}</a>
                                            <a className="phone" href="tel:{item.fields.phone}">{item.fields.phone}</a>
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

export default Contacts