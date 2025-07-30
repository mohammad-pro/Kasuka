import React, { Component } from 'react'
import { CiFaceSmile } from "react-icons/ci";


export default class Counts extends Component {
  render() {
    return (
      <div className='container mx-auto px-4 md:px-0 mt-20'>
        <div className='flex flex-col lg:flex-row items-center gap-6'>
          <div className='w-full lg:w-4/12'>
            <img src="images/counts.jpg" className='w-full h-auto rounded-xl' alt="Counts" />
          </div>
          <div className='w-full lg:w-8/12 flex flex-col  gap-4'>
            <h4 className='text-neutral-900 text-2xl md:text-3xl font-bold'>
              It offers the most worthy pleasure anyway
            </h4>
            <p className='text-neutral-700 text-base md:text-lg'>
              The pain itself may be a lot of pain, but the main reason is pain,
              but I give it time to sink in like a big ache and pain. Pain is the culprit.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
              <div className='flex flex-col'>
                <div className='flex flex-row  items-center'>
                  <CiFaceSmile className='text-amber-300 text-5xl' />
                  <h4 className='text-3xl font-bold ml-3'>65</h4>

                </div>
                <p>Happy customers are happy to receive something from the architect.</p>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row  items-center'>
                  <CiFaceSmile className='text-amber-300 text-5xl' />
                  <h4 className='text-3xl font-bold ml-3'>65</h4>

                </div>
                <p>Happy customers are happy to receive something from the architect.</p>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row  items-center'>
                  <CiFaceSmile className='text-amber-300 text-5xl' />
                  <h4 className='text-3xl font-bold ml-3'>65</h4>

                </div>
                <p>Happy customers are happy to receive something from the architect.</p>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row  items-center'>
                  <CiFaceSmile className='text-amber-300 text-5xl' />
                  <h4 className='text-3xl font-bold ml-3'>65</h4>

                </div>
                <p>Happy customers are happy to receive something from the architect.</p>
              </div>
            </div>


          </div>
        </div>



      </div>
    )
  }
}
