import React, { Component } from 'react';
import Slider1 from '../Images/img1.jpg';
import Slider2 from '../Images/img2.jpg';
import BlogPosts from './BlogPosts';
import Services from './Services';

class Home extends Component {
    render() {
        return (
            <div id="startpage">
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
                <section id="articles">
                    <h2 className="text-center">Articles</h2>
                    <BlogPosts />
                </section>
                <section id="services"> 
                    <h2 className="text-center">Services</h2>                
                    <Services />                      
                </section>
                <section id="portfolio">
                    <div className="container">
                        <h2>Portfolio</h2>
                        <p className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </div>
                    <div class="container">
                        <input type="checkbox" id="pic-1"/>
                        <label for="pic-1" className="lightbox"><img src="http://unsplash.it/800/600?image=1" alt="Dummy" /></label>
                        <input type="checkbox" id="pic-2"/>
                        <label for="pic-2" className="lightbox"><img src="http://unsplash.it/800/600?image=20" alt="Dummy" /></label>
                        <input type="checkbox" id="pic-3"/>
                        <label for="pic-3" className="lightbox"><img src="http://unsplash.it/800/600?image=119" alt="Dummy" /></label>
                        <input type="checkbox" id="pic-4"/>
                        <label for="pic-4" className="lightbox"><img src="http://unsplash.it/800/600?image=42" alt="Dummy" /></label>
                        <input type="checkbox" id="pic-5"/>
                        <label for="pic-5" className="lightbox"><img src="http://unsplash.it/800/600?image=48" alt="Dummy" /></label>
                        <input type="checkbox" id="pic-6"/>
                        <label for="pic-6" className="lightbox"><img src="http://unsplash.it/800/600?image=60" alt="Dummy" /></label>
                        <input type="checkbox" id="pic-7"/>
                        <label for="pic-7" className="lightbox"><img src="http://unsplash.it/800/600?image=201" alt="Dummy" /></label>
                        <input type="checkbox" id="pic-8"/>
                        <label for="pic-8" className="lightbox"><img src="http://unsplash.it/800/600?image=7" alt="Dummy" /></label>
                        <input type="checkbox" id="pic-9"/>
                        <label for="pic-9" className="lightbox"><img src="http://unsplash.it/800/600?image=119" alt="Dummy" /></label>
                        <input type="checkbox" id="pic-10"/>
                        <label for="pic-10" className="lightbox"><img src="http://unsplash.it/800/600?image=180" alt="Dummy" /></label>
                        <input type="checkbox" id="pic-11"/>
                        <label for="pic-11" className="lightbox"><img src="http://unsplash.it/800/600?image=96" alt="Dummy" /></label>
                        <input type="checkbox" id="pic-12"/>
                        <label for="pic-12" className="lightbox"><img src="http://unsplash.it/800/600?image=24" alt="Dummy" /></label>
                        <div class="grid">
                            <label for="pic-1" className="grid-item"><img src="http://unsplash.it/400/300?image=1" alt="Dummy" /></label>
                            <label for="pic-2" className="grid-item"><img src="http://unsplash.it/400/300?image=20" alt="Dummy" /></label>
                            <label for="pic-3" className="grid-item"><img src="http://unsplash.it/400/300?image=119" alt="Dummy" /></label>
                            <label for="pic-4" className="grid-item"><img src="http://unsplash.it/400/300?image=42" alt="Dummy" /></label>
                            <label for="pic-5" className="grid-item"><img src="http://unsplash.it/400/300?image=48" alt="Dummy" /></label>
                            <label for="pic-6" className="grid-item"><img src="http://unsplash.it/400/300?image=60" alt="Dummy" /></label>
                            <label for="pic-7" className="grid-item"><img src="http://unsplash.it/400/300?image=201" alt="Dummy" /></label>
                            <label for="pic-8" className="grid-item"><img src="http://unsplash.it/400/300?image=7" alt="Dummy" /></label>
                            <label for="pic-9" className="grid-item"><img src="http://unsplash.it/400/300?image=119" alt="Dummy" /></label>
                            <label for="pic-10" className="grid-item"><img src="http://unsplash.it/400/300?image=180" alt="Dummy" /></label>
                            <label for="pic-11" className="grid-item"><img src="http://unsplash.it/400/300?image=96" alt="Dummy" /></label>
                            <label for="pic-12" className="grid-item"><img src="http://unsplash.it/400/300?image=24" alt="Dummy" /></label>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home