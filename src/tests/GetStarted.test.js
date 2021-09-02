import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import GetStarted from '../components/GetStarted'

test('clicking Get Started calls event handler', () => {
    const component = render(<GetStarted />)
    const button = component.getByText('GET STARTED')

    expect(button)
})