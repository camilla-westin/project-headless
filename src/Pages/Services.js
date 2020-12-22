import React, { Component } from 'react';
import client from './Client';

class Services extends Component {
    constructor() {
        super()
        this.state = {servicepage: []}
    }

    componentDidMount() {
        client.getEntries({
            'content_type' : 'services',
            'order' : 'sys.createdAt'
          })
          .then((entries) => {
            this.setState({servicepage: entries.items}) 
          })
    }

    render() {
        return(
            <div id="services">
                <div className="container">
                    <h1 className="text-center">Services</h1>
                    <p className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>                   
                </div>  
                <div className="features container">
                    <div className="row">
                        {this.state.servicepage.map((item) =>{
                            return (
                                <div className="col-md-4">
                                <div className="feature-item">
                                    <img className="pr-3" src={item.fields.serviceIcon.fields.file.url} alt="" />
                                    <span>
                                        <h3>{item.fields.serviceHeading}</h3>
                                        <p>{item.fields.serviceText}</p>
                                    </span>                                      
                                </div>
                            </div> 
                            )
                        }                       
                    )}                    
                    </div>
                </div>        
            </div>
        )
    }
}

export default Services