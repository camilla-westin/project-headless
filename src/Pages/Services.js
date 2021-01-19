import React, { Component } from 'react';
import client from './Client';

class Services extends Component {
    constructor() {
        super()
        this.state = {servicepage: []}
    }

    componentDidMount() {
        client.getEntries({
            content_type : 'services',
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
                    <div className="row">
                        {this.state.servicepage.map((item, index) =>{
                            return (
                                <div key={index} className="col-md-4">
                                <div className="service-item">
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