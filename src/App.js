import React, { useEffect, useState } from 'react'
import GetStarted from './components/GetStarted'
import HowItWorks from './components/HowItWorks'
import stepsService from './services/steps'
import getLatestSteps from './utilities/stepcomparer'

const App = () => {
    const [steps, setSteps] = useState([])

    useEffect(() => {
        const fetchSteps = async () => {
            const allSteps = await stepsService.getAll()
            const latestSteps = getLatestSteps(allSteps)
            setSteps(latestSteps)
        }
        fetchSteps()
    }, [])

    return (
        <div>
            <GetStarted />
            <HowItWorks steps={steps}/>
        </div>
    )
}

export default App