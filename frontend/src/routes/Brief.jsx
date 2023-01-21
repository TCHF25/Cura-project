import React from 'react'
import {  ReactComponent as Medication1 } from '../assets/svg/medication1.svg'
import '../styles/css/brief.css'


const Brief = () => {
    return (
        <div>
            <div className='head'> 
                <Medication1 className='med-cover1'/>  
                <div>
                    <h1 className='part1-title'>MEDICATION</h1>
                </div>

                <div className='med-info'>
                    <div className='med-info-type'>
                        <h3 className='med-info-forms'>Form</h3>
                        <h3 className='med-info-forms'>Retail Price</h3>
                        <h3 className='med-info-forms'>Our Price</h3>
                        <h3 className='med-info-forms'>Savings</h3>
                    </div>
                    <div className='med-info-prices'>
                        <h3 className='med-info-result'>Paracetamol</h3>
                        <h3 className='med-info-result'>Tablet</h3>
                        <h3 className='med-info-result'>$30.00</h3>
                        <h3 className='med-info-result'>$25.00</h3>
                        <h3 className='med-info-result'>$5.00</h3>
                    </div>
                </div>

            </div>
            <div className='med-brief'>
                <div className='med-brief-container'>
                    <h2 className='med-brief-title'>
                        Medication Brief
                    </h2>
                    <h3 className='med-brief-details'>
                        Contains paracetamol. Do not use with any other paracetamol-containing products.

                        Underlying liver disease increases the risk or paracetamol related liver damage. Patients who have been diagnosed with liver or kidney impairment must seek medical advice before taking this medication.

                        Do not exceed the stated dose.

                        Patients should be advised to consult their doctor if their headaches become persistent.

                        Patients should be advised to consult a doctor if they suffer from non-serious arthritis and need to take painkillers every day.

                        Caution should be exercised in patients with glutathione depleted states, as the use of paracetamol may increase the risk of metabolic acidosis (refer also to section 4.9).

                        Use with caution in patients with glutathione depletion due to metabolic deficiencies.

                        If symptoms persist, medical advice must be sought.

                        Keep out of the sight and reach of children.

                    </h3>

                </div>

            </div>
        </div>
    )
}

export default Brief;