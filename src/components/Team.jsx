import React, { Component } from 'react'
import Title from './Title'
import TeamItem from './TeamItem'

export default class Team extends Component {
    constructor(props){
        super(props)

        this.state = { 
            teamDetail : [
                {id: 1 , image : 'images/team-1.jpg', name: 'Walter White' , role: 'Chief Executive Officer'},
                {id: 2 , image : 'images/team-2.jpg', name: 'Sarah Johnson' , role: 'Production Manager'},
                {id: 3 , image : 'images/team-3.jpg', name: 'William Anderson' , role: 'CTO'},
                {id: 4 , image : 'images/team-4.jpg', name: 'Amanda Jepsen' , role: 'Accountant'},
            ]
        }
    }


  render() {
    return (
      <div className='container mx-auto px-5 md:px-0 mt-10 mb-10'>
        <Title title = "Team" description="Check out our team" />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

            {
                this.state.teamDetail.map((item)=>(
                    <TeamItem  {...item}/>
                ))
            }
        </div>
      </div>
    )
  }
}
