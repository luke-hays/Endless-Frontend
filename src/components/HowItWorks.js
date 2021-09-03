import React from 'react'
import '../styles/HowItWorks.css'

const HowItWorks = ({ steps }) => {
    return (
        <div id='howItWorksMain'>
            <div className='innerContent'>
                <div className='howItWorksContent'>
                    <h2>How It Works</h2>
                    <div className='stepsRow'>
                        {steps.map(step => {
                            return (<div className='stepContainer' key={step.stepNumber}>
                                <div className='stepContent'>
                                    <h1>{step.stepNumber.toString().padStart(2, '0')}</h1>
                                    <h4>{step.title}</h4>
                                    <p>{step.body}</p>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks