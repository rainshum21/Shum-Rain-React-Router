import React from 'react';
import homeBanner from '../assets/images/home-banner.jpg';
import logo from '../assets/images/logo.png';
export default function Home() {
  return (
    <div>
      <div className="home-banner-container">
        <img src={homeBanner} alt="Home Banner" className="home-banner" />
        <img src={logo} alt="Home Banner" className="logo" />
        <h1 className="home-banner-text">"There are three responses to a piece of design - yes, no, and WOW! <br/> WOW is the one to aim for."</h1>
      </div>
      </div>
  );
}
