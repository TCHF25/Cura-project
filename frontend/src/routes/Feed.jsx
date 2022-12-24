import React from 'react'
import {  ReactComponent as Cover } from '../assets/svg/doctor1.svg'
import {  ReactComponent as Cover2  } from '../assets/svg/giving-pills.svg'
import '../styles/css/feed.css'

const Feed = () => {
    return (
        <div>
                <div> 
                <Cover className='cover'/>    
                    <h1 className='cover-text-background'>
                     Making Medication <br /> Accessible For Everyone
                    </h1>
                </div>
                <div>
                <Cover2 className='cover2'/> 
                    <h1 className='cover2-text-background'>
                      MAKING THE <br />WORLD A<br /> HEALTHIER, <br />HAPPIER PLACE
                    </h1>
                </div>
        </div> 
         
    )
}

export default Feed;