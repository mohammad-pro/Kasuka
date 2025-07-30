import React, { Component } from 'react'

export default class Cta extends Component {
  render() {
    return (
    <div className="relative bg-fixed bg-cover bg-center  " style={{ backgroundImage: "url('images/cta-bg.jpg')" }}>  
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className='relative container mx-auto px-5 md:px-0 py-20 z-20'>
            <div className='flex flex-col w-full  justify-center items-center text-white '>
                <h4 className='text-3xl font-bold mb-2'>Call to action</h4>
                <p className='text-justify md:text-center'>But the condemnation of pain in the film is unthinkable, in pleasure it wants to escape the pain of being a silus without consequence. They are the exceptions that the blind seek, they do not see, they are those who delegate their responsibilities to a guilt that alleviates the hardships of the soul.</p>
                ‌<button className='cursor-pointer border-2 border-white px-6 py-3 rounded-sm hover:bg-amber-300 hover:text-black hover:border-black transition-all duration-300'>Call to action</button>
            </div>
            
        </div>
    </div>
    )
  }
}
