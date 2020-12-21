import React, {Component} from 'react';
import Nav from './Components/Nav';
import Home from './Pages/Home'; 
import About from './Pages/About';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return(     
      <div>
        <Nav />
        <Home />
        <About />
        <Services />
        <Blog />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;