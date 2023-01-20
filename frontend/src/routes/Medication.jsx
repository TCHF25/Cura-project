import React from 'react'
import {  ReactComponent as Medication1 } from '../assets/svg/medication1.svg'
import '../styles/css/medication.css'
import { Link } from "react-router-dom"

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
                        <button className='meds'>Diabetes medications</button>
                        <button className='meds'>Diabetes medications</button>
                        <button className='meds'>Diabetes medications</button>
                        <button className='meds'>Diabetes medications</button>
                        <button className='meds'>Diabetes medications</button>
                        <button className='meds'>Diabetes medications</button>
                        <button className='meds'>Diabetes medications</button>
                        <button className='meds'>Diabetes medications</button>
                        <button className='meds'>Diabetes medications</button>
                        <button className='meds'>Diabetes medications</button>
                        <button className='meds'>Diabetes medications</button>
                                
                    </div>
                </div>
                <div className='med-showcase'>
                    <Link to="/brief" className='square' >
                        <div className='container'>
                                <div className='inside generic-name'>
                                    Adol
                                </div>
                                <div className='inside original-name'>
                                    Panadol
                                </div>
                                <div className='inside price'>
                                    20.00$
                                </div>
                        </div>
                    </Link>
                    <div className='square'>
                        <div className='container'>
                                <div className='inside generic-name'>
                                    Adol
                                </div>
                                <div className='inside original-name'>
                                    Panadol
                                </div>
                                <div className='inside price'>
                                    20.00$
                                </div>
                        </div>
                    </div>
                    <div className='square'>
                        <div className='container'>
                                <div className='inside generic-name'>
                                    Adol
                                </div>
                                <div className='inside original-name'>
                                    Panadol
                                </div>
                                <div className='inside price'>
                                    20.00$
                                </div>
                        </div>
                    </div>
                    <div className='square'>
                        <div className='container'>
                                <div className='inside generic-name'>
                                    Adol
                                </div>
                                <div className='inside original-name'>
                                    Panadol
                                </div>
                                <div className='inside price'>
                                    20.00$
                                </div>
                        </div>
                    </div>
                    <div className='square'>
                        <div className='container'>
                                <div className='inside generic-name'>
                                    Adol
                                </div>
                                <div className='inside original-name'>
                                    Panadol
                                </div>
                                <div className='inside price'>
                                    20.00$
                                </div>
                        </div>
                    </div>
                    <div className='square'>
                        <div className='container'>
                                <div className='inside generic-name'>
                                    Adol
                                </div>
                                <div className='inside original-name'>
                                    Panadol
                                </div>
                                <div className='inside price'>
                                    20.00$
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Medication;