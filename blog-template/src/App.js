import React from 'react';
import { Navigation } from './components/navigation';
import { PostsList } from './pages/PostsList';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navigation></Navigation>

      <div class="w3-main" style={{ "margin-left": "300px" }}>
        <header id="portfolio">
          <a href="#"><img src="/w3images/avatar_g2.jpg" class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></a>
          <span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"><i class="fa fa-bars"></i></span>
          <div class="w3-container">
            <h1><b>My Portfolio</b></h1>
          </div>
        </header>

        <PostsList></PostsList>

        <div class="w3-container w3-padding-large" style={{ "margin-bottom": "32px" }}>
          <About></About>
        </div>

        <div class="w3-container w3-padding-large w3-grey">
          <h4 id="contact"><b>Contact Me</b></h4>
          <Contact></Contact>
        </div>
        <div class="w3-black w3-center w3-padding-24">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-opacity">w3.css</a></div>
      </div>
    </div>
  );
}

export default App;
