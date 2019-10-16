import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Counter from './app'

describe('<Counter />', () => {
  it('properly increments the counter', () => {
    // Arrange
    const { getByText } = render(<Counter />)
    const counter = getByText('0')
    const incrementButton = getByText('+')
    const decrementButton = getByText('-')

    // Act
    fireEvent.click(incrementButton)
    // Assert
    expect(counter.textContent).toEqual('1')

    // Act
    fireEvent.click(decrementButton)
    // Assert
    expect(counter.textContent).toEqual('0')
  })
})
