import './App.css';
import React, { useState } from 'react';
import UseState from './most-known-hooks/UseState';
import UseEffect from './most-known-hooks/UseEffect';
import UseContext from './most-known-hooks/useContext/UseContext';
import UseRef from './lesser-used-hooks/useRef';
import UseMemo from './lesser-used-hooks/UseMemo';
import UseCallback from './lesser-used-hooks/useCallback/UseCallback';
import UseReducer from './lesser-used-hooks/useReducer/UseReducer';
import UseTransitionHook from './lesser-used-hooks/UseTransition';
import UseDeferredValueHook from './lesser-used-hooks/useDeferredValue/UseDeferredValue';
import UseLayoutEffectHook from './optional-hooks/useLayoutEffect/UseLayoutEffect';
import UseDebugValueHook from './optional-hooks/useDebugValue/UseDebugValue';
import UseImperativeHandleHook from './optional-hooks/useImperativeHandle/UseImperativeHandle';
import UseId from './optional-hooks/useId/UseId';
import CustomHook from './custom-hooks/CustomHook';
import ExperimentalHooks from './experimental-hooks/ExperimentalHooks';

const categories = [
  {
    name: 'Must Known Hooks',
    hooks: [
      { name: 'useState', component: UseState },
      { name: 'useEffect', component: UseEffect },
      { name: 'useContext', component: UseContext },
    ],
  },
  {
    name: 'Lesser Used Hooks',
    hooks: [
      { name: 'useRef', component: UseRef },
      { name: 'useMemo', component: UseMemo },
      { name: 'useCallback', component: UseCallback },
      { name: 'useReducer', component: UseReducer },
      { name: 'useTransition', component: UseTransitionHook },
      { name: 'useDeferredValue', component: UseDeferredValueHook },
    ],
  },
  {
    name: 'Optional Hooks',
    hooks: [
      { name: 'useLayoutEffect', component: UseLayoutEffectHook },
      { name: 'useDebugValue', component: UseDebugValueHook },
      { name: 'useImperativeHandle', component: UseImperativeHandleHook },
      { name: 'useId', component: UseId },
    ],
  },
  {
    name: 'Custom Hooks',
    hooks: [
      { name: 'Custom Hooks', component: CustomHook },
    ],
  },
  {
    name: 'Experimental Hooks',
    hooks: [
      { name: 'Experimental Hooks', component: ExperimentalHooks },
    ],
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState('');
  const [activeHook, setActiveHook] = useState('');

  const ActiveHookComponent = categories
    .flatMap(category => category.hooks)
    .find(hook => hook.name === activeHook)?.component;

    return (
      <div className="Main-Container">
        <h1 className="h1">React Hooks Simplified</h1>
        {ActiveHookComponent && <ActiveHookComponent />}
        <br />
    
        {activeHook ? (
          <>
            <button className='button' onClick={() => setActiveHook('')}>Back</button>
          </>
        ) : activeCategory ? (
          <>
            {categories.find(category => category.name === activeCategory).hooks.map(hook => (
              <h2 className="h2" key={hook.name} onClick={() => setActiveHook(hook.name)} style={{ cursor: 'pointer' }}>
                {hook.name} 
              </h2>
            ))}
            <button className='button' onClick={() => setActiveCategory('')}>Back</button>
          </>
        ) : (
          categories.map(category => (
            <h2 className="h2" key={category.name} onClick={() => setActiveCategory(category.name)} style={{ cursor: 'pointer' }}>
              {category.name}
            </h2>
          ))
        )}
      </div>
    );
}

export default App;