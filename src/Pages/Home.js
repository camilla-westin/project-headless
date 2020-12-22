import React, { Component } from 'react';
import Slider1 from '../Images/img1.jpg';
import Slider2 from '../Images/img2.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Slider1} className="d-block w-100" alt="Computer" />
                        </div>
                        <div className="carousel-item">
                            <img src={Slider2} className="d-block w-100" alt="Computer" />
                        </div>
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
                <section id="feature">
                    <div className="container">
                        <h2>Feature</h2>
                        <p className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        <div className="features container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="feature-item">
                                        <i className="fa fa-laptop"></i>
                                        <span>
                                            <h3>Lorem ipsum</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                        </span>                                      
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="feature-item">
                                        <i className="fa fa-laptop"></i>
                                        <span>
                                            <h3>Lorem ipsum</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                        </span>                                      
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="feature-item">
                                        <i className="fa fa-laptop"></i>
                                        <span>
                                            <h3>Lorem ipsum</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                        </span>                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home