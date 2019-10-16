import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count => count + 1)
  const decrement = () => setCount(count => count - 1)
  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}
