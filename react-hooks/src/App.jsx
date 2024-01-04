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

function App() {
  const [activeHook, setActiveHook] = useState('');

  const renderHook = () => {
    switch (activeHook) {
      case 'useState':
        return <UseState />;
      case 'useEffect':
        return <UseEffect />;
      case 'useContext':
        return < UseContext />;
      case 'useRef':
        return <UseRef />;
      case 'useMemo':
        return <UseMemo />;
      case 'useCallback':
        return <UseCallback />;
      case 'useReducer':
        return <UseReducer />;
      case 'useTransition':
        return <UseTransitionHook />;
      case 'useDeferredValue':
        return <UseDeferredValueHook />;
      case 'useLayoutEffect':
        return <UseLayoutEffectHook />;
      case 'useDebugValue':
        return <UseDebugValueHook />;
      case 'useImperativeHandle':
        return <UseImperativeHandleHook />;
      case 'useId':
        return <UseId />;

      default:
        return null;
    }
  };

  return (
    <div className="Main-Container">
      <h1>React Hooks Simplified</h1>
      {renderHook()}
      <br />

      {activeHook ? (
        <button style={{ marginTop: '60px' }} onClick={() => setActiveHook('')}>Back</button>
      ) : (
        <>
          <button onClick={() => setActiveHook('useState')}>useState Hook</button>
          <button onClick={() => setActiveHook('useEffect')}>useEffect Hook</button>
          <button onClick={() => setActiveHook('useContext')}>useContext Hook</button>
          <button onClick={() => setActiveHook('useRef')}>useRef Hook</button>
          <button onClick={() => setActiveHook('useMemo')}>useMemo Hook</button>
          <button onClick={() => setActiveHook('useCallback')}>useCallback Hook</button>
          <button onClick={() => setActiveHook('useReducer')}>useReducer Hook</button>
          <button onClick={() => setActiveHook('useTransition')}>useTransition Hook</button>
          <button onClick={() => setActiveHook('useDeferredValue')}>useDeferredValue Hook</button>
          <button onClick={() => setActiveHook('useLayoutEffect')}>useLayoutEffect Hook</button>
          <button onClick={() => setActiveHook('useDebugValue')}>useDebugValue Hook</button>
          <button onClick={() => setActiveHook('useImperativeHandle')}>useImperativeHandle Hook</button>
          <button onClick={() => setActiveHook('useId')}>useId Hook</button>

        </>
      )}
    </div>
  );
}

export default App;