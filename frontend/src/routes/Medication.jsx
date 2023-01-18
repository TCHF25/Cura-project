import React from 'react'
import {  ReactComponent as Medication1 } from '../assets/svg/medication1.svg'
import '../styles/css/medication.css'

const Medication = () => {
    return (
        <div>
            <div className='header'> 
                <Medication1 className='med-cover1'/>  
                <div>
                    <h1 className='part1-title'>MEDICATION</h1>
                </div>
                <div>
                    <div className='search-bar'>

                    </div>
                </div>
            </div>
            <div className='medication-choice'>
                <div className='menu'>
                    <div className='menu-title'>
                        <h3>All Medications</h3>
                    </div>
                    <div className='menu-details'>
                        <button className=''>Diabetes medications</button>
                        <button className=''>Diabetes medications</button>
                        <button className=''>Diabetes medications</button>
                        <button className=''>Diabetes medications</button>
                        <button className=''>Diabetes medications</button>
                        <button className=''>Diabetes medications</button>
                        <button className=''>Diabetes medications</button>
                        <button className=''>Diabetes medications</button>
                        <button className=''>Diabetes medications</button>
                        <button className=''>Diabetes medications</button>
                        <button className=''>Diabetes medications</button>
                        <button className=''>Diabetes medications</button>         
                    </div>
                </div>
                <div className='med-details'>

                </div>
            </div>
            
        </div>
    )
}

export default Medication;