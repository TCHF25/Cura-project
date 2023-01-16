import React from 'react'
import {  ReactComponent as Medication1 } from '../assets/svg/medication1.svg'
import '../styles/css/medication.css'

const Medication = () => {
    return (
        <div>
            <div> 
                <Medication1 className='med-cover1'/>  
                <div>
                        <h1 className='part1-title'>MEDICATION</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Medication;