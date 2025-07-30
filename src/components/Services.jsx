import React, { Component } from 'react'
import Title from './Title'
import { FaDribbble } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";
import { MdSlideshow } from "react-icons/md";
import { LiaArchwaySolid } from "react-icons/lia";






export default class Services extends Component {

  constructor(props){
    super(props)

    this.state = {
      servicesDetail : [
        {id : 1 ,title: 'Lorem Ipsum' , description : 'What pains and troubles will they receive to relax and enjoy the corruption?',icon : <FaDribbble /> },
        {id : 2 ,title: 'But as you can see' , description : 'They are the exceptions who look for black people, they do not see, they are the ones who are guilty of their own service',icon : <IoFileTrayOutline /> },
        {id : 3 ,title: 'Great pains' , description : 'They are the exceptions who look for black people, they do not see, they are the ones who are guilty of their own service',icon : <LiaTachometerAltSolid /> },
        {id : 4 ,title: 'Nobody else' , description : 'But in fact we both accuse them and are flattered with a righteous hatred',icon : <TfiWorld /> },
        {id : 5 ,title: 'Clean the hinge' , description : 'They are the exceptions who look for black people, they do not see, they are the ones who are guilty of their own service',icon : <MdSlideshow /> },
        {id : 6 ,title: 'Dons wall' , description : 'Our methods or efforts moreover, error flees, let the younger be wise',icon : <LiaArchwaySolid /> },
      ]
    }


  }

  render() {
    return (
      <div className='container mx-auto px-5 md:px-0 mb-14'>
        <div className='flex flex-col'>
            <Title title= "Services" description="Check out our services"/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-4'>
              {
                this.state.servicesDetail.map((item)=> (
                  <div className='border border-neutral-200 cursor-pointer h-[300px] px-3 flex justify-center items-center transition-all duration-300 hover:shadow-lg hover:shadow-black/30 rounded-xl bg-white'>
                    <div className='flex flex-col justify-center items-center text-center space-y-5'>

                      <div className='bg-amber-300 p-4 rounded-xl'>
                        {/* <FaDribbble className='text-4xl'/> */}
                        {React.cloneElement(item.icon, {className : 'text-4xl'})}
                      </div>

                        <h4 className='font-black text-2xl text-neutral-900'>{item.title}</h4>
                        <p className='text-neutral-700'>{item.description}</p>

                    </div>
                </div>
                ))
              }

            </div>
        </div>

      </div>
    )
  }
}
