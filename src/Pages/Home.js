import React, { Component } from 'react';
import BlogPosts from './Blog/BlogPosts';
import Services from '../Components/Service/Services';
import Slideshow from '../Components/Slideshow/Slideshow';
import Portfolio from '../Components/Portfolio/Portfolio';

class Home extends Component {
    render() {
        return (
            <div id="startpage">
                
                <Slideshow />

                <section id="articles">
                    <h2 className="text-center">Articles</h2>
                    <BlogPosts />
                </section>
                <section id="services"> 
                    <h2 className="text-center">Services</h2>                
                    <Services />                      
                </section>

                <Portfolio />
             
            </div>
        )
    }
}

export default Home