import React, { useState } from 'react';

function useStateHook() {
  // useState hook is used to add state to functional components.
  // It is called with the initial state, and it returns an array with two entries: the current state and a function to update it.
  // useState hooks must always be executed in the same order and cannot be placed inside if statements or loops.

  // Here, useState is called with the initial state of 4.
  // This default value is called every time the component is rendered.
  const [count, setCount] = useState(4);

  /* 
  Alternatively, useState can be called with a function that returns the initial state.
  This function is only called once, when the component is first rendered.
  It is useful when the initial state is expensive to compute, like a big array or object.

  const [count, setCount] = useState(() => {
    console.log('run function');
    return 4;
  });
  */

  const [theme, setTheme] = useState('blue')

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1 )
    setTheme('red')
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default useStateHook;
