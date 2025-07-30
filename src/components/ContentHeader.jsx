import React, { Component } from 'react'
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiEyedropperSampleBold } from "react-icons/pi";
import { CgColorBucket } from "react-icons/cg";
import { FiDatabase } from "react-icons/fi";


export default class ContentHeader extends Component {
  render() {
    return (
      <div className='flex  w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col w-full h-full items-center justify-between container mx-auto '>

              <div className="max-w-2xl mt-28 text-center space-y-4">
                <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight">
                  Powerful digital solutions with 
                  <span className="text-amber-300"> Kasuka</span>
                </h1>
                <h1 className='text-white text-3xl'>We are a team of talented digital marketers</h1> 
            </div>

            <div className=' w-full  mx-auto max-w-6xl flex flex-row flex-wrap justify-center gap-8 mt-10 px-5 py-5 md:px-0'>
                <div className='w-full md:w-44 h-32 border-[.5px] border-amber-50 rounded-[2px] transition-all duration-300 hover:border-amber-300 text-white hover:text-amber-300 cursor-pointer flex flex-col justify-center items-center '>
                    <FaRegChartBar className='text-4xl text-amber-300' />
                    <h1 className='mt- font'>Dramatic text</h1>
                </div>
                <div className='w-full md:w-44 h-32 border-[.5px] border-amber-50 rounded-[2px] transition-all duration-300 hover:border-amber-300 text-white hover:text-amber-300 cursor-pointer flex flex-col justify-center items-center '>
                    <MdOutlineShoppingCart className='text-4xl text-amber-300' />
                    <h1 className='mt- font'>Qualitative chart</h1>
                </div>
                <div className='w-full md:w-44 h-32 border-[.5px] border-amber-50 rounded-[2px] transition-all duration-300 hover:border-amber-300 text-white hover:text-amber-300 cursor-pointer flex flex-col justify-center items-center '>
                    <PiEyedropperSampleBold className='text-4xl text-amber-300' />
                    <h1 className='mt- font'>Portfolio</h1>
                </div>
                <div className='w-full md:w-44 h-32 border-[.5px] border-amber-50 rounded-[2px] transition-all duration-300 hover:border-amber-300 text-white hover:text-amber-300 cursor-pointer flex flex-col justify-center items-center '>
                    <CgColorBucket className='text-4xl text-amber-300' />
                    <h1 className='mt- font'>Final performances</h1>
                </div>
                <div className='w-full md:w-44 h-32 border-[.5px] border-amber-50 rounded-[2px] transition-all duration-300 hover:border-amber-300 text-white hover:text-amber-300 cursor-pointer flex flex-col justify-center items-center '>
                    <FiDatabase className='text-4xl text-amber-300' />
                    <h1 className='mt- font'>Stored information</h1>
                </div>

            </div>

        </div>


      </div>
    )
  }
}
