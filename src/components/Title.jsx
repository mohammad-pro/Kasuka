import React, { Component } from 'react'

export default class Title extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
            <div>
                <div className='flex items-center'>
                    <h1 className='text-neutral-700 '>{this.props.title}</h1>
                    <div className="w-28 h-0.5 bg-amber-300 mr-2 rounded ml-3"></div>

                </div>
                <p className='text-neutral-900 text-3xl font-bold'>{this.props.description}</p>
            </div>
    )
  }
}
