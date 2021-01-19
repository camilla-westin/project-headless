import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import BlogPosts from './Pages/BlogPosts';
import BlogPost from './Pages/BlogPost';
import BlogPage from './Pages/BlogPage';
import Contact from './Pages/Contact';
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
          <Route exact path="/Services" component={Services} />
          <Route exact path="/BlogPosts" component={BlogPosts} />
          <Route exact path="/BlogPosts/:slug" component={BlogPost} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/BlogPage" component={BlogPage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;