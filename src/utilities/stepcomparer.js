//Encapsulating the logic for getting the latest steps here
//This will help with testing

const getLatestSteps = (allSteps) => {
    //Were okay with mutating this array
    allSteps.sort(compareStepNumber)
    return allSteps.map(returnLatestVersion)
}

//Broken this out otherwise its going to look even messier
const returnLatestVersion = (step) => {
    const latestStep = step.versionContent.sort(compareDates)[0]
    return { ...latestStep, stepNumber: step.stepNumber }
}

const compareStepNumber = (a, b) => {
    let comparison = 0

    if (a.stepNumber > b.stepNumber) {
        comparison = 1
    } else if (a.stepNumber < b.stepNumber) {
        comparison = -1
    }

    return comparison
}

const compareDates = (a, b) => {
    let comparison = 0

    //reversal here so we don't have to call it later
    if (Date(a.effectiveDate) > Date(b.effectiveDate)) {
        comparison = -1
    } else if (Date(a.effectiveDate) < Date(b.effectiveDate)) {
        comparison = 1
    }

    return comparison
}

export default getLatestSteps