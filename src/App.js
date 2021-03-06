import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import ServicesPage from './Pages/ServicesPage';
import BlogPosts from './Pages/Blog/BlogPosts';
import BlogPost from './Pages/Blog/BlogPost';
import BlogPage from './Pages/Blog/BlogPage';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={ServicesPage} />
          <Route exact path="/BlogPosts" component={BlogPosts} />
          <Route exact path="/BlogPosts/:slug" component={BlogPost} />
          <Route exact path="/ContactPage" component={ContactPage} />
          <Route exact path="/BlogPage" component={BlogPage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;