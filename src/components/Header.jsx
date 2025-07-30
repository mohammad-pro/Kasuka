import React, { Component } from 'react'
import HeaderMenu from './HeaderMenu'
import ContentHeader from './ContentHeader'

export default class Header extends Component {
  render() {
    return (
      <div>
        
          <div  id="home" className="relative bg-fixed bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('images/hero-bg.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
            <div className='bg-[rgba(17,17,17,0.57)] fixed top-0 left-0 w-full z-30 '>
              <div className='container mx-auto'>
                <HeaderMenu/>
              </div>
            </div>

            <div className='relative z-20'>
              <ContentHeader/>
            </div>

          </div>
        
      </div>

    )
  }
}
