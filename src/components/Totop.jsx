import React, { Component } from 'react'
import { FaArrowUp } from "react-icons/fa";


export default class Totop extends Component {

constructor(props){
    super(props)
    this.state = {
      isVisible: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleVisibility);
  }

  toggleVisibility = () => {
    if (window.scrollY > 200) { 
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  }

    topHandler(){
        window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
    }
  render() {
    return (
        <>
    {this.state.isVisible && <div className='h-screen fixed bottom-15 right-1 z-50 p-2'>
        <div className='flex items-end h-full'>
            <div className='bg-amber-300 w-8 h-8  md:w-10 md:h-10 flex rounded-md justify-center items-center cursor-pointer' onClick={()=>this.topHandler()}>
                <FaArrowUp className='text-xl' />
            </div>
        </div>
      </div>}
        </>
    )
  }
}
