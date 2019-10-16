import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import Counter from './app';
import '@testing-library/jest-dom/extend-expect';
import Todos from './components/Todo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

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

test('adds a new to-do', () => {
  const { getByPlaceholderText, getByText } = render(<Todos />)
  const input = getByPlaceholderText(/add something/i)
  const todo = 'Read Master React Testing'

  getByText('No to-dos!')

  fireEvent.change(input, { target: { value: todo } })
  fireEvent.keyDown(input, { key: 'Enter' })

  getByText(todo)
  expect(input.value).toBe('')
})
