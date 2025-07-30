import React, { Component } from 'react'
import Title from './Title'

export default class Portfolio extends Component {
    constructor(props){
        super(props)

        this.state = {
            image: [
                { id: 1, image: 'images/portfolio-1.jpg', alt: 'Item 1', isLarge: true },
                { id: 2, image: 'images/portfolio-2.jpg', alt: 'Item 2', isLarge: false },
                { id: 3, image: 'images/portfolio-3.jpg', alt: 'Item 3', isLarge: false },
                { id: 4, image: 'images/portfolio-4.jpg', alt: 'Item 4', isLarge: false },
                { id: 5, image: 'images/portfolio-5.jpg', alt: 'Item 5', isLarge: true },
                { id: 6, image: 'images/portfolio-6.jpg', alt: 'Item 6', isLarge: true },
                { id: 7, image: 'images/portfolio-7.jpg', alt: 'Item 7', isLarge: false },
                { id: 8, image: 'images/portfolio-8.jpg', alt: 'Item 8', isLarge: false },
                { id: 9, image: 'images/portfolio-9.jpg', alt: 'Item 9', isLarge: false },
            ]
        }


    }


  render() {
    return (
      <div className='container mx-auto px-5 md:px-0 mt-16'>
            <Title title = 'Portfolio' description = "Check out our portfolio" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-6 mt-16 ">
            {this.state.image.map((item) => (
                <div className={`overflow-hidden hover:shadow-xl hover:shadow-black/20 transition-all duration-200 rounded-sm shadow ${item.isLarge ? 'row-span-2' : ''}`}>
                <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>


      </div>
    )
  }
}
