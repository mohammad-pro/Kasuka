import React, { Component } from 'react'
import { VscMenu } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";


export default class HeaderMenu extends Component {

  constructor(props){
    super(props)

    this.state = {
      mobileMenuActive : false
    }

  }



  MobileMenuHandler(menuState){
    this.setState({
      mobileMenuActive : menuState
    })
  }



  render() {
    return (
      <div className='flex lg:justify-between items-center relative'>

        <div className='logo flex justify-center items-center cursor-pointer'>
            <img src="images/logo.png" className='w-16' alt="" />
            <h1 className=' text-3xl text-white'>KASOUKA</h1>
        </div>

        <div>
          <ul className="space-x-9 hidden lg:flex list-none">
            <li><a href="#home" className="text-white transition-all duration-300 hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="text-white transition-all duration-300 hover:text-yellow-400">About</a></li>
            <li><a href="#contact" className="text-white transition-all duration-300 hover:text-yellow-400">Sample</a></li>
            <li><a href="#contact" className="text-white transition-all duration-300 hover:text-yellow-400">Seervice</a></li>
            <li><a href="#contact" className="text-white transition-all duration-300 hover:text-yellow-400">Team</a></li>
            <li><a href="#contact" className="text-white transition-all duration-300 hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>


        <div className={`${this.state.mobileMenuActive ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-50  flex-col justify-center items-center`}>
          <ul className="space-y-1 text-center list-none w-full max-w-screen-lg">

            <li className="w-full">
              <IoCloseOutline className='text-white text-left text-3xl cursor-pointer ml-4'  onClick={()=>this.MobileMenuHandler(false)}/>

            </li>

            <li className="hover:bg-white/10 w-full">
              <a href="#home" className="block w-full text-white text-2xl py-4 px-6 text-left hover:text-yellow-400">
                Home
              </a>
            </li>
            <li className="hover:bg-white/10 w-full">
              <a href="#about" className="block w-full text-white text-2xl py-4 px-6 text-left hover:text-yellow-400">
                About
              </a>
            </li>
            <li className="hover:bg-white/10 w-full">
              <a href="#sample" className="block w-full text-white text-2xl py-4 px-6 text-left hover:text-yellow-400">
                Sample
              </a>
            </li>
            <li className="hover:bg-white/10 w-full">
              <a href="#service" className="block w-full text-white text-2xl py-4 px-6 text-left hover:text-yellow-400">
                Service
              </a>
            </li>
            <li className="hover:bg-white/10 w-full">
              <a href="#team" className="block w-full text-white text-2xl py-4 px-6 text-left hover:text-yellow-400">
                Team
              </a>
            </li>
            <li className="hover:bg-white/10 w-full">
              <a href="#contact" className="block w-full text-white text-2xl py-4 px-6 text-left hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>


        <div className='flex justify-center items-center'>
          <button className='border-2 ml-5 lg:ml-0 border-amber-300 text-white px-6 py-1.5 rounded-sm hover:bg-amber-300 hover:text-black cursor-pointer '>Start</button>
          <VscMenu className='text-white lg:hidden text-2xl ml-2 cursor-pointer' onClick={()=>this.MobileMenuHandler(true)} />
        </div>

      </div>
    )
  }
}
