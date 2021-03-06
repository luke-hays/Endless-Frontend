import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import HowItWorks from '../components/HowItWorks'
import getLatestSteps from '../utilities/stepcomparer'

//There should be a test here if there are two matching stepnumbers

test('<HowItWorks /> is constructed from given steps', () => {
    const fakeSteps = [
        {
            'id': 'd11b10ba-1cd8-48f8-93eb-454b716fd5a0',
            'stepNumber': '2',
            'versionContent': [
                {
                    'title': 'Request A Delivery',
                    'body': 'Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.',
                    'effectiveDate': '2019-05-04T03:04:05.000Z'
                },
                {
                    'title': 'We Deliver',
                    'body': 'Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.',
                    'effectiveDate': '2019-04-04T05:04:05.000Z'
                }
            ]
        }
    ]

    const fakeStep = getLatestSteps(fakeSteps)

    const component = render(
        <HowItWorks steps={fakeStep} />
    )

    //We want to return only the object with most recent effectiveDate
    expect(component.container).toHaveTextContent(
        'Request A Delivery'
    )
    expect(component.container).not.toHaveTextContent(
        'We Deliver'
    )
})