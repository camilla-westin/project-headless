import React, { Component } from 'react';
import client from '../../Pages/Client';

class Slideshow extends Component {
    constructor() {
        super()
        this.state = {
            images: []
        }
    }
    componentDidMount() {
        client.getEntries({
            content_type : 'startpageSlideshowImage'           
          })
          .then((entries) => {
            this.setState({images: entries.items})  
        })
    }
    render() {
        return(                                         
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">                   
                <div className="carousel-inner">
                    {this.state.images.map((item, index) => {
                        return(     
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <img src={item.fields.image.fields.file.url} className="d-block w-100" alt={item.fields.image.fields.title} />
                            </div>
                        )}          
                    )}   
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a> 
            </div>                  
        )
    }
}

export default Slideshow