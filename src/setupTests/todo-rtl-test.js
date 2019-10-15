import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Todos from '../components/Todo';
import React from 'react';

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
