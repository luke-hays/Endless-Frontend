import React from 'react'

const HowItWorks = ({ steps }) => {
    if (steps.length !== 1) {
        console.log(steps)
    }

    return (
        <div>
            <h3>How It Works</h3>
            <div>
                {steps.map(step => {
                    return (<div key={step.stepNumber}>
                        <h1>{step.stepNumber}</h1>
                        <h4>{step.title}</h4>
                        <p>{step.body}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default HowItWorks