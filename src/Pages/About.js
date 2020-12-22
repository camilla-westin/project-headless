import React, {Component} from 'react';
 
class About extends Component {
    constructor() {
        super()
        this.state = {aboutpage: []}
    }
 
    render() {
        return(
            <div id="about">
                <div className="container">
                    <h1 className="text-center">About Us</h1>
                    <p className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                </div>
            </div>
        );
    }
}
export default About