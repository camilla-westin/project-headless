import React, { Component } from 'react';
import client from '../../Client';
import './Portfolio.css';

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            portfolio: []
        }
    }
    componentDidMount() {
        client.getEntries({
            content_type : 'portfolio'           
          })
          .then((entries) => {
            this.setState({portfolio: entries.items})     
        })
    }
    render() {
        return(
            <section id="portfolio">                
                <div class="container">
                    <h2 className="text-center">Portfolio</h2>
                    {this.state.portfolio.map((item, index) => {
                        return(
                            <div key={index}>
                                <input type="checkbox" id="pic-{index}"/>
                                <label for="pic-{index}" className="lightbox"><img src={item.fields.portfolioImage.fields.file.url} alt={item.fields.portfolioTitle} /></label>
                            </div>
                        )}       
                    )}   

                    <div class="grid">
                        {this.state.portfolio.map((item, index) => {
                            return(
                                <label for="pic-{index}" className="grid-item" key={index}>
                                    <img src={item.fields.portfolioImage.fields.file.url} alt={item.fields.portfolioTitle} />
                                </label>
                            )}       
                        )}   
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio