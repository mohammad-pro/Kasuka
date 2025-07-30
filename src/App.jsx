import React, { Component } from 'react'
import Header from './components/Header'
import About from './components/About';
import Client from './components/Client';
import Feature from './components/Feature';
import Services from './components/Services';
import Cta from './components/Cta';
import Portfolio from './components/Portfolio';
import Counts from './components/Counts';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Footer from './components/Footer';
import Totop from './components/Totop';


export default class App extends Component {
  render() {
    return (
      <div className=''>
        <Totop/>
        <Header/>
        <About/>
        <Client/>
        <Feature/>
        <Services/>
        <Cta/>
        <Portfolio/>
        <Counts/>
        <Testimonials/>
        <Team/>
        <Footer/>
      </div>
    )
  }
}
